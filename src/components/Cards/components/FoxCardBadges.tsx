import React from "react";

const FoxCardBadges = ({ badges }: { badges: IFoxCardBadge[] }) => {
  return (
    <div className="foxCard_badgesWrapper">
      {badges &&
        badges.length > 0 &&
        badges.map((badge) => (
          <p key={badge.id} className={`foxCard_badge ${badge.badgeType}`}>
            {badge.badgeTitle}
          </p>
        ))}
    </div>
  );
};

export default FoxCardBadges;
