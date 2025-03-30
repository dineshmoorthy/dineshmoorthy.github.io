import React from "react";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "projects", label: "Projects" },
    { id: "futureProjects", label: "Future Projects" },
    { id: "resume", label: "Resume" },
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="mb-8 overflow-x-auto">
        <div className="border-b border-gray-200 flex whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 font-medium focus:outline-none border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "text-gray-800 border-primary -mb-px"
                  : "text-gray-500 hover:text-gray-800 border-transparent hover:border-gray-300"
              }`}
              onClick={() => onTabChange(tab.id)}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabNavigation;
