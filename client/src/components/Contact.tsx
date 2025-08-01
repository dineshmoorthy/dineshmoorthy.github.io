import React from "react";
import { ProfileInfo } from "@shared/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  profile: ProfileInfo;
}

const Contact: React.FC<ContactProps> = ({ profile }) => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  return (
    <section id="contact" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-6">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-envelope-open-text w-8 text-primary text-xl"></i>
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone-alt w-8 text-primary text-xl"></i>
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt w-8 text-primary text-xl"></i>
                <span>{profile.location}</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Connect with me:</h4>
              <div className="flex space-x-4">
                <a 
                  href={profile.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile" 
                  className="text-white hover:text-primary transition-colors"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a 
                  href={profile.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile" 
                  className="text-white hover:text-primary transition-colors"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a 
                  href={profile.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile" 
                  className="text-white hover:text-primary transition-colors"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                {profile.socialLinks.medium && (
                  <a 
                    href={profile.socialLinks.medium} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Medium Profile" 
                    className="text-white hover:text-primary transition-colors"
                  >
                    <i className="fab fa-medium text-2xl"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    className="w-full" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <Input 
                    type="email" 
                    id="email" 
                    className="w-full" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <Input 
                    type="text" 
                    id="subject" 
                    className="w-full" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    className="w-full" 
                    required 
                  />
                </div>
                
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
