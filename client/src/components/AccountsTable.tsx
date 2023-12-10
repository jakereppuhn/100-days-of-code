import { useState, useEffect } from "react";
import useGetAccounts from "../hooks/useGetAccounts";
import { IAccount } from "../shared/interfaces";

const AccountsTable = () => {
  const {
    accountsData,
    setPage,
    setPageSize,
    // Include other setters if needed for features like sorting, filtering
  } = useGetAccounts();

  // Set the initial page and page size
  const initialPageSize = 10;
  const [localPage, setLocalPage] = useState<number>(1);

  // Update the page and page size in the hook when localPage changes
  useEffect(() => {
    setPage(localPage);
    setPageSize(initialPageSize);
  }, [localPage, setPage, setPageSize]);

  return (
    <section className="overflow-hidden py-4">
      <div className="rounded-xl border border-neutral-100 bg-neutral-50 py-5">
        <div className="px-6">
          <div className="mb-5 w-full overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="text-left">
                  <th className="bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-500">
                    Account Name
                  </th>
                  <th className="bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-500">
                    Phone Number
                  </th>
                  <th className="bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-500">
                    Account Owner
                  </th>
                  <th className="bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-500">
                    Tags
                  </th>
                </tr>
              </thead>
              <tbody>
                {accountsData?.accounts.map((account: IAccount) => (
                  <tr key={account.id}>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-neutral-900">
                      {account.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-neutral-900">
                      {account.phone}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-neutral-900">
                      {account.owner.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-neutral-900">
                      {account.tags &&
                        account.tags.map((tag) => (
                          <span
                            key={tag.name}
                            style={{ backgroundColor: tag.colorCode }}
                            className="mr-2 rounded px-2 py-1 text-white"
                          >
                            {tag.name.charAt(0).toUpperCase() +
                              tag.name.slice(1)}
                          </span>
                        ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="-m-2 flex flex-wrap items-center justify-between">
            <div className="w-auto p-2">
              <div className="-m-0.5 flex flex-wrap">
                {/* Previous Page Button */}
                <div className="w-auto p-0.5">
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-sm border hover:border-neutral-300"
                    onClick={() => setLocalPage(Math.max(1, localPage - 1))}
                    disabled={localPage === 1}
                  >
                    {/* SVG for left arrow */}
                  </button>
                </div>

                {/* Page Number Buttons */}
                {[...Array(accountsData?.totalPages).keys()].map((index) => (
                  <div key={index} className="w-auto p-0.5">
                    <button
                      className={`flex h-9 w-9 items-center justify-center rounded-sm border ${
                        localPage === index + 1
                          ? "border-neutral-600"
                          : "hover:border-neutral-300"
                      }`}
                      onClick={() => setLocalPage(index + 1)}
                    >
                      <span className="text-sm font-semibold">{index + 1}</span>
                    </button>
                  </div>
                ))}

                {/* Next Page Button */}
                <div className="w-auto p-0.5">
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-sm border hover:border-neutral-300"
                    onClick={() => setLocalPage(localPage + 1)}
                    disabled={localPage === accountsData?.totalPages}
                  >
                    {/* SVG for right arrow */}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-auto p-2">
              <p className="text-sm text-neutral-400">
                Showing page {localPage} of {accountsData?.totalPages}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountsTable;
