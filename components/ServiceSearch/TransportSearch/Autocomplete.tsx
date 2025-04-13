import React, { useState } from "react";
import axios from "axios";

interface Location {
  display_name: string;
  lat: string;
  lon: string;
}

const AutocompleteInput: React.FC<{
  onSelect?: (location: Location) => void;
}> = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Location[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const search = async (q: string) => {
    if (!q) {
      setResults([]);
      return;
    }

    const { data } = await axios.get("https://nominatim.openstreetmap.org/search", {
      params: {
        q,
        format: "json",
        addressdetails: 1,
        limit: 5,
      },
    });

    setResults(data);
    setShowDropdown(true);
  };

  const handleSelect = (location: Location) => {
    setQuery(location.display_name);
    setShowDropdown(false);
    setResults([]);
    onSelect?.(location);
  };

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          search(e.target.value);
        }}
        placeholder="Search for a location"
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      {showDropdown && results.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            maxHeight: "200px",
            overflowY: "auto",
            margin: 0,
            padding: 0,
            listStyle: "none",
            zIndex: 9999,
          }}
        >
          {results.map((result, index) => (
            <li
              key={index}
              onClick={() => handleSelect(result)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              {result.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
