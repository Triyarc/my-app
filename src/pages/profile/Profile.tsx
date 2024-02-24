import React, { useState } from "react";

interface Tab {
  label: string;
  content: JSX.Element;
}

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs: Tab[] = [
    {
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>Content for Tab 3</div>,
    },
  ];
  return (
    <div className='tabs'>
      <div className='tab-buttons'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className='tab-content'>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Profile;
