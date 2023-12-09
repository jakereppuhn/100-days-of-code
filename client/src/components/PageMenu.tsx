type Button = {
  label: string;
  icon?: JSX.Element;
  onClick: () => void;
};

type Tab = {
  label: string;
  value: string;
  search?: (search: string) => void;
  buttons?: Button[];
};

type PageMenuProps = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const PageMenu = ({ tabs, activeTab, setActiveTab }: PageMenuProps) => {
  const activeTabData = tabs.find((tab) => tab.value === activeTab);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (activeTabData && activeTabData.search) {
      activeTabData.search(e.target.value);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <nav>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`border-b-2 px-4 py-2 ${
              activeTab === tab.value
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-400 hover:border-gray-200"
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="flex gap-2">
        {activeTabData?.search && (
          <input
            type="text"
            className="rounded-md border border-gray-300 px-4 py-1.5"
            placeholder="Search"
            onChange={handleSearchChange}
          />
        )}
        {activeTabData?.buttons?.map((button, index) => (
          <button
            key={index}
            className="flex gap-1 rounded border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-semibold capitalize text-white hover:border-blue-600 hover:bg-blue-600"
            onClick={button.onClick}
          >
            {button.icon && <span>{button.icon}</span>}
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PageMenu;
