import React from "react";
import './ProfileCard.css';

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">

      <div className="profile-card-content">
        <h3>{profile.name}</h3>

        <p className="profile-role">
          {profile.role}
        </p>

        <div className="profile-skill">
          <span>Skill:</span>
          <span>{profile.skill}</span>
        </div>
      </div>

    </div>
  );
}

export default ProfileCard;