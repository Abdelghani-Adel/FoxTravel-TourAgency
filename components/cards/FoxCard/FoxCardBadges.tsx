import React from "react";
import { v4 } from "uuid";

const FoxCardBadges = ({ badges }: { badges: ICardBadge[] }) => {
  return (
    <div className="foxCard_badgesWrapper">
      {badges &&
        badges.length > 0 &&
        badges.map((badge) => (
          <p key={v4()} className={`foxCard_badge ${badge.badgeType}`}>
            {badge.badgeTitle}
          </p>
        ))}
    </div>
  );
};

export default FoxCardBadges;
