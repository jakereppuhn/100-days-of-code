import { useState } from "react";
import PageMenu from "../components/PageMenu";

const Test = () => {
  const [activeTab, setActiveTab] = useState("accounts");

  const handleSearch = () => {
    console.log("Search action");
  };

  const handleSort = () => {
    console.log("Sort action");
  };

  const handleFilter = () => {
    console.log("Filter action");
  };

  const handleCreate = () => {
    console.log("Create action");
  };

  const tabs = [
    {
      label: "Accounts",
      value: "accounts",
      search: handleSearch,
      buttons: [
        { label: "create", onClick: handleCreate },
        { label: "filter", onClick: handleFilter },
      ],
    },
    {
      label: "Contacts",
      value: "contacts",
      search: handleSearch,
      buttons: [{ label: "sort", onClick: handleSort }],
    },
    {
      label: "Leads",
      value: "leads",
      buttons: [
        { label: "create", onClick: handleCreate },
        { label: "sort", onClick: handleSort },
      ],
    },
    {
      label: "Opportunities",
      value: "opportunities",
      buttons: [{ label: "filter", onClick: handleFilter }],
    },
  ];

  return (
    <div className="p-6">
      <PageMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Test;
