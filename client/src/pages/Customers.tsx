import { useState } from "react";
import { Layout, PageMenu } from "../components";
import AccountsTable from "../components/AccountsTable";

const Customers = () => {
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

  const renderTab = () => {
    switch (activeTab) {
      case "accounts":
        return <AccountsTable />;
      case "contacts":
        return <div>Contacts</div>;
      case "leads":
        return <div>Leads</div>;
      case "opportunities":
        return <div>Opportunities</div>;
      default:
        return <div>Accounts</div>;
    }
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
    <Layout>
      <PageMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderTab()}
    </Layout>
  );
};

export default Customers;
