import React, { useState, useEffect } from "react";
import { ProfileInfo } from "@shared/types";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ResumeProps {
  profile: ProfileInfo;
}

const Resume: React.FC<ResumeProps> = ({ profile }) => {
  const [resumeImage, setResumeImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  
  // For demo purposes, display Word document as image
  useEffect(() => {
    setIsLoading(false);
    // Since we can't directly convert Word to image in the browser,
    // we're using the image of the resume in public/images directory
    setResumeImage("/images/resume-image.png");
    setTotalPages(1); // Set to actual number of pages
  }, []);
  
  const downloadResume = () => {
    // Create an anchor element and set the attributes
    const link = document.createElement('a');
    link.href = profile.resumeLink;
    link.download = 'Dinesh-Resume.pdf';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-2 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-4"></div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Resume
          </h2>
        </div>
        <Button 
          onClick={downloadResume}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
        >
          <i className="fas fa-download mr-2"></i>
          Download Resume
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="relative mb-8 overflow-hidden">
        <div className="absolute -top-16 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="bg-white rounded-xl shadow-xl p-8 mb-8 relative overflow-hidden">
        {/* Futuristic UI elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none"></div>
        
        {/* Scanning animation effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute animate-scan"></div>
        </div>
        
        {/* Resume viewer */}
        <div className="flex flex-col items-center">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-4 text-gray-500">Loading resume...</p>
            </div>
          ) : (
            <div className="w-full max-w-4xl mx-auto">
              <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-lg bg-white">
                {/* Document header */}
                <div className="bg-gray-50 border-b border-gray-200 py-2 px-4 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs text-gray-500">Dinesh-Resume.docx</div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <i className="fas fa-search"></i>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <i className="fas fa-print"></i>
                    </button>
                  </div>
                </div>
                
                {/* Document content */}
                <div className="p-4">
                  {resumeImage ? (
                    <img 
                      src={resumeImage} 
                      alt="Resume preview" 
                      className="w-full border border-gray-100 shadow-sm"
                    />
                  ) : (
                    <div className="h-[842px] bg-gray-100 flex items-center justify-center">
                      <p className="text-gray-500">Resume preview not available</p>
                    </div>
                  )}
                </div>
                
                {/* Document footer */}
                {totalPages > 1 && (
                  <div className="bg-gray-50 border-t border-gray-200 py-2 px-4 flex justify-between items-center">
                    <button 
                      className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                      disabled={pageNumber <= 1}
                      onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                    >
                      <i className="fas fa-chevron-left mr-2"></i>
                      Previous
                    </button>
                    <div className="text-sm text-gray-500">
                      Page {pageNumber} of {totalPages}
                    </div>
                    <button 
                      className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                      disabled={pageNumber >= totalPages}
                      onClick={() => setPageNumber(prev => Math.min(prev + 1, totalPages))}
                    >
                      Next
                      <i className="fas fa-chevron-right ml-2"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8">
        <Separator className="my-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Resume highlights */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <i className="fas fa-graduation-cap text-2xl text-blue-500 mr-3"></i>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <p className="text-gray-600">Anna University, Chennai - B.Tech in Information Technology</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <i className="fas fa-briefcase text-2xl text-indigo-500 mr-3"></i>
              <h3 className="text-lg font-semibold">Experience</h3>
            </div>
            <p className="text-gray-600">10+ years in enterprise software development and solution architecture</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <i className="fas fa-certificate text-2xl text-purple-500 mr-3"></i>
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>
            <p className="text-gray-600">IELTS, Microsoft Azure, AWS, Oracle Certified Java Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;