import React from "react";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "experience", label: "Experience", icon: "fas fa-briefcase" },
    { id: "skills", label: "Skills", icon: "fas fa-code" },
    { id: "education", label: "Education", icon: "fas fa-graduation-cap" },
    { id: "projects", label: "Projects", icon: "fas fa-project-diagram" },
    { id: "achievements", label: "Achievements", icon: "fas fa-trophy" },
    { id: "futureProjects", label: "Future Projects", icon: "fas fa-rocket" },
    { id: "resume", label: "Resume", icon: "fas fa-file-alt" },
  ];

  return (
    <section className="container mx-auto px-4 mb-8">
      <div className="border-b border-gray-700">
        <div className="flex overflow-x-auto py-1">
          <div className="flex whitespace-nowrap">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  className={`
                    px-4 py-3 text-sm font-medium 
                    transition-colors duration-200 flex items-center
                    ${isActive 
                      ? "text-white border-b-2 border-blue-600 bg-gray-900/50" 
                      : "text-gray-400 hover:text-gray-200 hover:border-b-2 hover:border-blue-600/40"
                    }
                  `}
                  onClick={() => onTabChange(tab.id)}
                  aria-selected={isActive}
                  role="tab"
                >
                  <i className={`${tab.icon} mr-2`}></i>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabNavigation;
