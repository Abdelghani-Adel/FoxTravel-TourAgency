import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCity } from "react-icons/fa";

interface GeoapifyFeature {
  properties: {
    place_id: string;
    lat: string;
    lon: string;
    formatted: string;
  };
}

interface GeoapifyResponse {
  features: GeoapifyFeature[];
}

const LocationInput = (props: Iprops) => {
  const { title, placeholder, value, onSelect } = props;
  const [query, setQuery] = useState<string>(value.name);
  const [suggestions, setSuggestions] = useState<GeoapifyFeature[]>([]);
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query?.length < 2) return;

      const fetchSuggestions = async () => {
        try {
          const response = await fetch(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&limit=5&apiKey=${
              process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY
            }`
          );

          const data: GeoapifyResponse = await response.json();
          setSuggestions(data.features);
        } catch (error) {
          console.error("Failed to fetch suggestions:", error);
        }
      };

      fetchSuggestions();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (sugg: GeoapifyFeature) => {
    setQuery(sugg.properties.formatted);
    setFocused(false);
    onSelect({ lat: sugg.properties.lat, lon: sugg.properties.lon, name: sugg.properties.formatted });
  };

  return (
    <div className="ss_formInput">
      <h6 className="ss_formInputTitle">{title}</h6>

      <div className="d-flex align-items-center gap-2">
        <FaCity />

        <div className="relative">
          <input
            type="text"
            className="ss_formInputField"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)} // slight delay for click
          />
          {focused && suggestions.length > 0 && (
            <ul className="border border-t-0 shadow bg-white absolute z-10 w-full">
              {suggestions.map((sugg) => (
                <li
                  key={sugg.properties.place_id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(sugg)}
                >
                  {sugg.properties.formatted}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationInput;

type Iprops = {
  title: string;
  placeholder: string;
  value: ILocation;
  onSelect: (location: ILocation) => void;
};
