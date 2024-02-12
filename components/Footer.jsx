// components/Footer.js
import React from 'react';
import { FaInstagram, FaPinterest, FaTiktok , FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4" style={{marginTop:10}}>
      <div className="container mx-auto flex items-center justify-between h-full">
        <p className="text-sm">© 2023 Mindful</p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/mindful.manifesters" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="cursor-pointer" />
          </a>
          <a href="https://za.pinterest.com/mindfulmanifesters/" target="_blank" rel="noopener noreferrer">
            <FaPinterest size={24} className="cursor-pointer" />
          </a>
          <a href="https://www.tiktok.com/@mindful.manifeste" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={24} className="cursor-pointer" />
          </a>

          <a href="https://www.tiktok.com/@mindful.manifeste" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={24} className="cursor-pointer" />
          </a>

          <a href="https://www.youtube.com/channel/UCm57A4zeMQqhA_LQYjFEG9A" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
