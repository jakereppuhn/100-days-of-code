import { useState } from "react";
import { Layout, PageMenu } from "../components";
import AccountsTable from "../components/AccountsTable";

const Customers = () => {
  const [activeTab, setActiveTab] = useState("accounts");
  const [createAccountModal, setCreateAccountModal] = useState(false);
  const [filterAccountModal, setFilterAccountModal] = useState(false);

  const toggleCreateAccountModal = () => {
    setFilterAccountModal(false);
    setCreateAccountModal(!createAccountModal);
  };

  const toggleFilterAccountModal = () => {
    setFilterAccountModal(!filterAccountModal);
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
      buttons: [
        { label: "filter", onClick: toggleFilterAccountModal },
        { label: "create", onClick: toggleCreateAccountModal },
        { label: "export", onClick: toggleFilterAccountModal },
      ],
    },
    {
      label: "Contacts",
      value: "contacts",
    },
    {
      label: "Leads",
      value: "leads",
    },
    {
      label: "Opportunities",
      value: "opportunities",
    },
  ];

  return (
    <Layout>
      <PageMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {createAccountModal && activeTab === "accounts" && (
        <div className="fixed inset-y-0 left-0 z-50 flex w-full items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative w-full max-w-md rounded-lg bg-white p-4">
            <button
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
              onClick={toggleCreateAccountModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <p>Your modal content goes here.</p>
          </div>
        </div>
      )}
      {filterAccountModal && activeTab === "accounts" && (
        <div
          id="dropdown"
          className="top-30 fixed right-4 z-10 w-56 rounded-lg bg-white p-3 shadow dark:bg-gray-700"
        >
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </h6>
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            <li className="flex items-center">
              <input
                id="apple"
                type="checkbox"
                value=""
                className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
              />

              <label
                htmlFor="apple"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Apple (56)
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="fitbit"
                type="checkbox"
                value=""
                className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
              />

              <label
                htmlFor="fitbit"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Fitbit (56)
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="dell"
                type="checkbox"
                value=""
                className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
              />

              <label
                htmlFor="dell"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Dell (56)
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="asus"
                type="checkbox"
                value=""
                checked
                className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
              />

              <label
                htmlFor="asus"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Asus (97)
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="logitech"
                type="checkbox"
                value=""
                checked
                className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
              />

              <label
                htmlFor="logitech"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Logitech (97)
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="msi"
                type="checkbox"
                value=""
                checked
                className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
              />

              <label
                htmlFor="msi"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                MSI (97)
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="bosch"
                type="checkbox"
                value=""
                checked
                className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
              />

              <label
                htmlFor="bosch"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Bosch (176)
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="sony"
                type="checkbox"
                value=""
                className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
              />

              <label
                htmlFor="sony"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Sony (234)
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="samsung"
                type="checkbox"
                value=""
                checked
                className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
              />

              <label
                htmlFor="samsung"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Samsung (76)
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="canon"
                type="checkbox"
                value=""
                className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
              />

              <label
                htmlFor="canon"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Canon (49)
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="microsoft"
                type="checkbox"
                value=""
                className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
              />

              <label
                htmlFor="microsoft"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Microsoft (45)
              </label>
            </li>

            <li className="flex items-center">
              <input
                id="razor"
                type="checkbox"
                value=""
                className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
              />

              <label
                htmlFor="razor"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Razor (49)
              </label>
            </li>
          </ul>
        </div>
      )}
      {renderTab()}
    </Layout>
  );
};

export default Customers;
