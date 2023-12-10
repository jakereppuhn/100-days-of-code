import { useState, useEffect } from "react";
import axios from "axios";
import { IAccount } from "../shared/interfaces";

const API_URL = "http://localhost:8080/api/v1/accounts";

const useGetAccounts = () => {
  const [accountsData, setAccountsData] = useState<{
    accounts: IAccount[];
    totalAccounts: number;
    totalPages: number;
  } | null>(null);
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [page, setPage] = useState<number | undefined>(undefined);
  const [pageSize, setPageSize] = useState<number | undefined>(undefined);
  const [fields, setFields] = useState<string[] | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            filter: filter ? JSON.stringify(filter) : undefined,
            sort,
            page,
            pageSize,
            fields: fields ? fields.join(",") : undefined,
          },
          withCredentials: true,
        });

        const data = response.data;
        setAccountsData({
          accounts: data.accounts,
          totalAccounts: data.totalAccounts,
          totalPages: data.totalPages,
        });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "An error occurred");
        } else {
          setError("An error occurred");
        }
      }
    };

    if (page !== undefined && pageSize !== undefined) {
      fetchAccounts();
    }
  }, [filter, sort, page, pageSize, fields]);

  return {
    accountsData,
    setFilter,
    setSort,
    setPage,
    setPageSize,
    setFields,
    error,
  };
};

export default useGetAccounts;
