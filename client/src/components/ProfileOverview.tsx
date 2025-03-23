import React from "react";
import { ProfileInfo } from "@shared/types";
import { Card, CardContent } from "@/components/ui/card";

interface ProfileOverviewProps {
  profile: ProfileInfo;
}

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ profile }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <Card className="mb-8">
        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="rounded-full w-48 h-48 mx-auto border-4 border-white shadow overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-3/4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-700 mb-6">
              {profile.about}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <i className="fas fa-envelope mr-2 text-primary"></i>
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <i className="fas fa-globe mr-2 text-primary"></i>
                <span>{profile.website}</span>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <a 
                href={profile.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href={profile.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href={profile.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter Profile" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              {profile.socialLinks.medium && (
                <a 
                  href={profile.socialLinks.medium} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Medium Profile" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <i className="fab fa-medium text-2xl"></i>
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProfileOverview;
