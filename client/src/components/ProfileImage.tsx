import React from 'react';

interface ProfileImageProps {
  imageSrc: string;
  altText: string;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageSrc, altText, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src={imageSrc}
        alt={altText}
        className="rounded-full object-cover shadow-lg border-2 border-primary/20"
      />
    </div>
  );
};

export default ProfileImage;