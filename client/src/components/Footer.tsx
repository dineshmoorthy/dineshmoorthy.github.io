import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">&copy; {year} John Doe. All rights reserved.</p>
        <p className="text-gray-400 text-sm">
          Designed and built with <i className="fas fa-heart text-primary"></i> using modern web technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;
