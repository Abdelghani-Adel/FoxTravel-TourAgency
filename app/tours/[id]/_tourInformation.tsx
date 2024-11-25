import React from "react";

interface TourInformationProps {
  information: Information[];
}

const TourInformation: React.FC<TourInformationProps> = ({ information }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {information.map((info) => {
        if (!info.details || info.details.length < 1) return null;
        return (
          <div key={info.title} className="forceStyle">
            <h4 className="text-lg font-semibold textSecondary mb-3">
              {info.title}
            </h4>
            <div
              dangerouslySetInnerHTML={{ __html: info.details }}
              className="prose prose-sm max-w-none"
            />
          </div>
        );
      })}
    </div>
  );
};

export default TourInformation;
