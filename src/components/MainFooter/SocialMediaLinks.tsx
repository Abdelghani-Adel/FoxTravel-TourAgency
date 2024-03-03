import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

const iconSize = "2.5rem";

const SocialMediaLinks = () => {
  return (
    <div className="socialIcon_list">
      <a
        href="https://www.facebook.com/foxtravelegypt"
        target="_blank"
        className="socialIcon facebook"
      >
        <FaFacebook />
      </a>
      <a href="https://wa.me/+201028886661" target="_blank" className="socialIcon whatsapp">
        <FaWhatsapp />
      </a>
      <a href="#" target="_blank" className="socialIcon youtube">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
