import React from "react";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "experience", label: "Experience", icon: "fas fa-briefcase", color: "cyan" },
    { id: "skills", label: "Skills", icon: "fas fa-code", color: "fuchsia" },
    { id: "education", label: "Education", icon: "fas fa-graduation-cap", color: "cyan" },
    { id: "achievements", label: "Achievements", icon: "fas fa-trophy", color: "fuchsia" },
    { id: "projects", label: "Projects", icon: "fas fa-project-diagram", color: "cyan" },
  ];

  return (
    <section className="container mx-auto px-4 py-1 mb-8 relative">
      {/* Cyberpunk background for tabs */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-xl"></div>
      
      {/* Top and bottom decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70"></div>
      
      <div className="relative z-10 overflow-x-auto py-1">
        <div className="flex whitespace-nowrap justify-center sm:justify-start">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const colorClass = tab.color === "cyan" ? 
              "from-cyan-500 to-blue-600" : 
              "from-fuchsia-500 to-purple-600";
            
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`
                  relative group mx-1 first:ml-0 px-4 py-3 text-sm font-medium rounded-md 
                  transition-all duration-300 z-0 flex items-center
                  ${isActive 
                    ? "text-white bg-black border border-gray-800" 
                    : "text-gray-400 hover:text-gray-200"
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  onTabChange(tab.id);
                }}
                aria-selected={isActive}
                role="tab"
              >
                {/* Glowing background on active/hover */}
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-20 blur-sm rounded-md -z-10`}></div>
                )}
                
                {/* Icon */}
                <i className={`${tab.icon} mr-2 ${isActive ? `text-${tab.color}-400` : 'opacity-75'}`}></i>
                
                {/* Text with futuristic effect on hover */}
                <span className="relative overflow-hidden">
                  {tab.label}
                  
                  {/* Animated underline effect */}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-left
                      bg-gradient-to-r ${colorClass} ${isActive ? 'scale-x-100' : 'group-hover:scale-x-100'}`}
                  ></span>
                </span>
                
                {/* Decorative circuit for active tab */}
                {isActive && (
                  <>
                    <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-cyan-400"></span>
                    <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-fuchsia-400"></span>
                  </>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TabNavigation;
