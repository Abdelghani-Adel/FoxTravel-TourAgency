import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";

const SocialMediaLinks = () => {
  return (
    <div className="socialIcon_list">
      <a href="https://www.facebook.com/foxtravelegypt" target="_blank" className="socialIcon">
        <FaFacebook />
      </a>
      <a href="https://www.facebook.com/foxtravelegypt" target="_blank" className="socialIcon">
        <AiFillInstagram />
      </a>
      <a href="https://www.facebook.com/foxtravelegypt" target="_blank" className="socialIcon">
        <FaTwitter />
      </a>
      <a href="#" target="_blank" className="socialIcon">
        <FaYoutube />
      </a>
      <a href="https://wa.me/+201028886661" target="_blank" className="socialIcon">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
