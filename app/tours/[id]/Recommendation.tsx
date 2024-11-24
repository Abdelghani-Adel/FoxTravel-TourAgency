import React from "react";

interface RecommendationProps {
  percentage: number;
}

export const Recommendation: React.FC<RecommendationProps> = ({
  percentage,
}) => {
  return (
    <div className="flex items-center mt-4">
      <span className="text-green-600">&#10084;</span>
      <p className="ml-2 text-sm">
        {percentage}% of travelers recommend this experience
      </p>
    </div>
  );
};
