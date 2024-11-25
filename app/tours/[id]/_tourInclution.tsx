import React from "react";
import { GiCheckMark } from "react-icons/gi";

interface TourInclusionProps {
  inclusions: informations2[];
}

const TourInclusion: React.FC<TourInclusionProps> = ({ inclusions }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {inclusions.map((section) => (
        <div key={section.title} className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-600 mb-3">
            {section.title}
          </h4>
          <div className="space-y-2">
            {section.details.map((detail) => (
              <div key={detail} className="flex items-center space-x-2">
                {section.title === "Inclusions" ? (
                  <GiCheckMark className="text-green-500 h-4 w-4" />
                ) : (
                  <span className="font-bold text-red-500">×</span>
                )}
                <span className="text-gray-600 font-light">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourInclusion;
