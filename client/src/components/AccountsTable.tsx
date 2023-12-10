import { useState, useEffect } from "react";
import useGetAccounts from "../hooks/useGetAccounts";
import { IAccount } from "../shared/interfaces";
import SortIcon from "./SortIcon";

const AccountsTable = () => {
  const { accountsData, setPage, setPageSize, setSort } = useGetAccounts();

  const initialPageSize = 10;
  const [localPage, setLocalPage] = useState<number>(1);
  const [localSort, setLocalSort] = useState<string>("name,ASC");

  useEffect(() => {
    setPage(localPage);
    setPageSize(initialPageSize);
    setSort(localSort);
  }, [localPage, localSort, setPage, setPageSize, setSort]);

  const updateSort = (fieldToSort: string) => {
    let newSort = `${fieldToSort},ASC`;

    if (localSort.startsWith(fieldToSort)) {
      newSort = localSort.endsWith(",ASC")
        ? `${fieldToSort},DESC`
        : `${fieldToSort},ASC`;
    }

    setLocalSort(newSort);
    setSort(newSort);
  };

  return (
    <section className="overflow-hidden py-4">
      <div className="rounded-xl border border-neutral-100 bg-neutral-50 py-5">
        <div className="px-6">
          <div className="mb-5 w-full overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="text-left">
                  <th className="w-1/4 bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-500">
                    <button
                      className="flex items-center"
                      onClick={() => updateSort("name")}
                    >
                      <span className="mr-1.5">Account Name</span>
                      <SortIcon
                        isSorted={localSort.startsWith("name")}
                        isDesc={localSort === "name,DESC"}
                      />
                    </button>
                  </th>
                  <th className="w-1/4 bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-500">
                    <button
                      className="flex items-center"
                      onClick={() => updateSort("phone")}
                    >
                      <span className="mr-1.5">Phone Number</span>
                      <SortIcon
                        isSorted={localSort.startsWith("phone")}
                        isDesc={localSort === "phone,DESC"}
                      />
                    </button>
                  </th>
                  <th className="w-1/4 bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-500">
                    <button
                      className="flex items-center"
                      onClick={() => updateSort("owner.name")}
                    >
                      <span className="mr-1.5">Account Owner</span>
                      <SortIcon
                        isSorted={localSort.startsWith("owner")}
                        isDesc={localSort === "owner.name,DESC"}
                      />
                    </button>
                  </th>
                  <th className="w-1/4 bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-500">
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
                <div className="w-auto p-0.5">
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-sm border hover:border-neutral-300"
                    onClick={() => setLocalPage(Math.max(1, localPage - 1))}
                    disabled={localPage === 1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>

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

                <div className="w-auto p-0.5">
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-sm border hover:border-neutral-300"
                    onClick={() => setLocalPage(localPage + 1)}
                    disabled={localPage === accountsData?.totalPages}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
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
