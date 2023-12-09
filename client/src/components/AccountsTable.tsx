import { useEffect, useState } from "react";
import useGetAccounts from "../hooks/useGetAccounts";
import SortIcon from "./SortIcon";

const AccountsTable = () => {
  const { accountsData, setFilter, setSort, setPage, setPageSize, error } =
    useGetAccounts();

  // Local state for input fields
  const [localFilter, setLocalFilter] = useState("");
  const [localSort, setLocalSort] = useState("");
  const [localPage, setLocalPage] = useState(1);
  const [localPageSize, setLocalPageSize] = useState(10);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLocalFilter(e.target.value);
  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLocalPage(Number(e.target.value));
  const handlePageSizeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLocalPageSize(Number(e.target.value));

  const applyFilter = () => setFilter(localFilter);
  const applyPage = (newPage: number) => {
    setLocalPage(newPage);
    setPage(newPage);
  };
  const applyPageSize = () => setPageSize(localPageSize);

  const handleSortChange = (fieldToSort: string) => {
    let newSort = `${fieldToSort},ASC`;

    if (localSort.startsWith(fieldToSort)) {
      newSort = localSort.endsWith(",ASC")
        ? `${fieldToSort},DESC`
        : `${fieldToSort},ASC`;
    }

    setLocalSort(newSort);
  };

  useEffect(() => {
    if (localSort) {
      setSort(localSort);
    }
  }, [localSort]);

  const totalPages = Math.ceil((accountsData?.count ?? 0) / localPageSize);

  return (
    <section className="overflow-hidden py-4">
      <div className="rounded-xl border border-neutral-100 bg-neutral-50 py-5">
        <div className="px-6">
          <div className="mb-5 w-full overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="text-left">
                  <th className="border-b border-neutral-100 pb-3.5">
                    <button
                      className="inline-flex items-center text-sm font-medium text-gray-500"
                      onClick={() => handleSortChange("name")}
                    >
                      <span className="mr-1.5">Account Name</span>
                      <SortIcon
                        isSorted={localSort.startsWith("name")}
                        isDesc={localSort === "name,DESC"}
                      />
                    </button>
                  </th>
                  <th className="border-b border-neutral-100 pb-3.5">
                    <button
                      className="inline-flex items-center text-sm font-medium text-gray-500"
                      onClick={() => handleSortChange("phone")}
                    >
                      <span className="mr-1.5">Phone</span>
                      <SortIcon
                        isSorted={localSort.startsWith("phone")}
                        isDesc={localSort === "phone,DESC"}
                      />
                    </button>
                  </th>
                  <th className="border-b border-neutral-100 pb-3.5">
                    <button
                      className="inline-flex items-center text-sm font-medium text-gray-500"
                      onClick={() => handleSortChange("website")}
                    >
                      <span className="mr-1.5">Website</span>
                      <SortIcon
                        isSorted={localSort.startsWith("website")}
                        isDesc={localSort === "website,DESC"}
                      />
                    </button>
                  </th>
                  <th className="border-b border-neutral-100 pb-3.5">
                    <button
                      className="inline-flex items-center text-sm font-medium text-gray-500"
                      onClick={() => handleSortChange("owner.name")}
                    >
                      <span className="mr-1.5">Account Owner</span>
                      <SortIcon
                        isSorted={localSort.startsWith("owner.name")}
                        isDesc={localSort === "owner.name,DESC"}
                      />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {accountsData?.accounts.map((account) => (
                  <tr key={account.id}>
                    <td className="border-b border-neutral-100 py-2.5 pr-4">
                      <span className="font-medium">{account.name}</span>
                    </td>
                    <td className="border-b border-neutral-100 py-2.5 pr-4">
                      <span className="font-medium">{account.phone}</span>
                    </td>
                    <td className="border-b border-neutral-100 py-2.5 pr-4">
                      <span className="font-medium">{account.website}</span>
                    </td>
                    <td className="border-b border-neutral-100 py-2.5 pr-4">
                      <span className="font-medium">{account.owner?.name}</span>
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
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>

                {[...Array(totalPages).keys()].map((index) => (
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
                    onClick={() =>
                      setLocalPage(Math.min(localPage + 1, totalPages))
                    }
                    disabled={localPage === totalPages}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
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
                Showing page {localPage} of {totalPages}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountsTable;
