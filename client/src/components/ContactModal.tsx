import React, { useState } from "react";
import { ProfileInfo } from "@shared/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  profile: ProfileInfo;
}

const ContactModal: React.FC<ContactModalProps> = ({ profile }) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  
  const closeModal = () => {
    const modal = document.getElementById('contact-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    closeModal();
  };

  return (
    <div 
      id="contact-modal" 
      className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[100] hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="w-full max-w-2xl mx-4 bg-black border border-gray-800 rounded-lg shadow-[0_0_20px_rgba(80,250,250,0.3)] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-black flex justify-between items-center">
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
            Send a Message
          </h2>
          <button 
            onClick={closeModal}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Contact Information</h3>
              <p className="text-gray-400 mb-4">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-envelope-open-text w-8 text-cyan-500 text-xl"></i>
                  <span className="text-gray-300">{profile.email}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone-alt w-8 text-fuchsia-500 text-xl"></i>
                  <span className="text-gray-300">{profile.phone}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt w-8 text-cyan-500 text-xl"></i>
                  <span className="text-gray-300">{profile.location}</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="h-px w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-50"></div>
            
            {/* Connect Links */}
            <div>
              <h4 className="text-white font-medium mb-3">Connect with me:</h4>
              <div className="flex space-x-4">
                <a 
                  href={profile.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile" 
                  className="p-2 border border-gray-800 rounded-lg hover:border-cyan-500 hover:bg-black/50 transition-all hover:shadow-[0_0_10px_rgba(80,250,250,0.3)]"
                >
                  <i className="fab fa-github text-xl text-gray-300 hover:text-cyan-400 transition-colors"></i>
                </a>
                <a 
                  href={profile.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile" 
                  className="p-2 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-black/50 transition-all hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                >
                  <i className="fab fa-linkedin text-xl text-gray-300 hover:text-blue-400 transition-colors"></i>
                </a>
                <a 
                  href={profile.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile" 
                  className="p-2 border border-gray-800 rounded-lg hover:border-blue-400 hover:bg-black/50 transition-all hover:shadow-[0_0_10px_rgba(29,161,242,0.3)]"
                >
                  <i className="fab fa-twitter text-xl text-gray-300 hover:text-[#1DA1F2] transition-colors"></i>
                </a>
                {profile.socialLinks.medium && (
                  <a 
                    href={profile.socialLinks.medium} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Medium Profile" 
                    className="p-2 border border-gray-800 rounded-lg hover:border-gray-400 hover:bg-black/50 transition-all hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                  >
                    <i className="fab fa-medium text-xl text-gray-300 hover:text-white transition-colors"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-900 border-gray-800 focus:border-cyan-500 text-white" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-900 border-gray-800 focus:border-cyan-500 text-white" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <Input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-gray-900 border-gray-800 focus:border-cyan-500 text-white" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <Textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-gray-900 border-gray-800 focus:border-cyan-500 text-white" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 text-white font-medium py-2 shadow-[0_0_15px_rgba(80,250,250,0.3)]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-3 border-t border-gray-800 bg-gradient-to-r from-black to-gray-900 text-center">
          <p className="text-xs text-gray-500">Your data is handled securely and never shared with third parties.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;