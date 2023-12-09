const AccountsTable = () => {
  return (
    <section className="overflow-hidden py-4">
      <div className="rounded-xl border border-neutral-100 bg-neutral-50 py-5">
        <div className="px-6">
          <h3 className="font-heading pb-8 text-lg font-semibold text-neutral-600">
            Transaction History
          </h3>
          <div className="mb-5 w-full overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="text-left">
                  <th className="border-b border-neutral-100 pb-3.5">
                    <a
                      className="inline-flex items-center text-sm font-medium uppercase text-gray-500"
                      href="#"
                    >
                      <span className="mr-1.5">Id</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z"
                          fill="#7F8995"
                        ></path>
                      </svg>
                    </a>
                  </th>
                  <th className="border-b border-neutral-100 pb-3.5">
                    <a
                      className="inline-flex items-center text-sm font-medium text-gray-500"
                      href="#"
                    >
                      <span className="mr-1.5">Name</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z"
                          fill="#7F8995"
                        ></path>
                      </svg>
                    </a>
                  </th>
                  <th className="border-b border-neutral-100 pb-3.5">
                    <a
                      className="inline-flex items-center text-sm font-medium text-gray-500"
                      href="#"
                    >
                      <span className="mr-1.5">Price</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z"
                          fill="#7F8995"
                        ></path>
                      </svg>
                    </a>
                  </th>
                  <th className="border-b border-neutral-100 pb-3.5">
                    <a
                      className="inline-flex items-center text-sm font-medium text-gray-500"
                      href="#"
                    >
                      <span className="mr-1.5">Product</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z"
                          fill="#7F8995"
                        ></path>
                      </svg>
                    </a>
                  </th>
                  <th className="border-b border-neutral-100 pb-3.5">
                    <a
                      className="inline-flex items-center text-sm font-medium text-gray-500"
                      href="#"
                    >
                      <span className="mr-1.5">Purchase Time</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z"
                          fill="#7F8995"
                        ></path>
                      </svg>
                    </a>
                  </th>
                  <th className="border-b border-neutral-100 pb-3.5">
                    <a
                      className="inline-flex items-center text-sm font-medium text-gray-500"
                      href="#"
                    >
                      <span className="mr-1.5">Status</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.7636 6.56365C5.11508 6.21218 5.68492 6.21218 6.0364 6.56365L9 9.52726L11.9636 6.56365C12.3151 6.21218 12.8849 6.21218 13.2364 6.56365C13.5879 6.91512 13.5879 7.48497 13.2364 7.83645L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.83645C4.41213 7.48497 4.41213 6.91512 4.7636 6.56365Z"
                          fill="#7F8995"
                        ></path>
                      </svg>
                    </a>
                  </th>
                  <th className="border-b border-neutral-100 pb-3.5"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">29506</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <div className="flex flex-wrap items-center">
                      <img
                        className="mr-3 h-9"
                        src="dashy-assets/images/avatar5.png"
                        alt=""
                      />
                      <span className="font-semibold">Darrell Steward</span>
                    </div>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">$17.84</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">
                      Playstation 4 Limited Edition
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium text-neutral-500">
                      15 May 2020 9:00 pm
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="rounded-full bg-green-500 bg-opacity-10 px-2.5 py-1 text-sm font-medium text-green-500">
                      Confirmed
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5">
                    <a className="inline-flex py-2.5 pr-0" href="#">
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="mx-0.5 h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">29506</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <div className="flex flex-wrap items-center">
                      <img
                        className="mr-3 h-9"
                        src="dashy-assets/images/avatar6.png"
                        alt=""
                      />
                      <span className="font-semibold">Bessie Cooper</span>
                    </div>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">$17.84</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">Gopro Hero 7</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium text-neutral-500">
                      15 May 2020 8:00 pm
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="rounded-full bg-red-500 bg-opacity-10 px-2.5 py-1 text-sm font-medium text-red-500">
                      Canceled
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5">
                    <a className="inline-flex py-2.5 pr-0" href="#">
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="mx-0.5 h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">29506</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <div className="flex flex-wrap items-center">
                      <img
                        className="mr-3 h-9"
                        src="dashy-assets/images/avatar7.png"
                        alt=""
                      />
                      <span className="font-semibold">Annette Black</span>
                    </div>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">$6.48</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">DJI Mavic Pro 2</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium text-neutral-500">
                      15 May 2020 7:00 pm
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="rounded-full bg-green-500 bg-opacity-10 px-2.5 py-1 text-sm font-medium text-green-500">
                      Confirmed
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5">
                    <a className="inline-flex py-2.5 pr-0" href="#">
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="mx-0.5 h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">29506</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <div className="flex flex-wrap items-center pl-12">
                      <span className="font-semibold">Darlene Robertson</span>
                    </div>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">$14.81</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">Brand New Bike</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium text-neutral-500">
                      15 May 2020 6:00 pm
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="rounded-full bg-green-500 bg-opacity-10 px-2.5 py-1 text-sm font-medium text-green-500">
                      Confirmed
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5">
                    <a className="inline-flex py-2.5 pr-0" href="#">
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="mx-0.5 h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">29506</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <div className="flex flex-wrap items-center">
                      <img
                        className="mr-3 h-9"
                        src="dashy-assets/images/avatar8.png"
                        alt=""
                      />
                      <span className="font-semibold">Jane Cooper</span>
                    </div>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">$8.99</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">Coach Tabby 26</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium text-neutral-500">
                      15 May 2020 11:00 pm
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="rounded-full bg-yellow-500 bg-opacity-10 px-2.5 py-1 text-sm font-medium text-yellow-500">
                      Pending
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5">
                    <a className="inline-flex py-2.5 pr-0" href="#">
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="mx-0.5 h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">29506</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <div className="flex flex-wrap items-center">
                      <img
                        className="mr-3 h-9"
                        src="dashy-assets/images/avatar9.png"
                        alt=""
                      />
                      <span className="font-semibold">Cameron Williamson</span>
                    </div>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">$17.84</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium">Dell Computer Monitor</span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="font-medium text-neutral-500">
                      15 May 2020 5:00 pm
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5 pr-4">
                    <span className="rounded-full bg-green-500 bg-opacity-10 px-2.5 py-1 text-sm font-medium text-green-500">
                      Confirmed
                    </span>
                  </td>
                  <td className="border-b border-neutral-100 py-2.5">
                    <a className="inline-flex py-2.5 pr-0" href="#">
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="mx-0.5 h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4">
                    <span className="font-medium">29506</span>
                  </td>
                  <td className="py-2.5 pr-4">
                    <div className="flex flex-wrap items-center">
                      <img
                        className="mr-3 h-9"
                        src="dashy-assets/images/avatar10.png"
                        alt=""
                      />
                      <span className="font-semibold">Esther Howard</span>
                    </div>
                  </td>
                  <td className="py-2.5 pr-4">
                    <span className="font-medium">$5.22</span>
                  </td>
                  <td className="py-2.5 pr-4">
                    <span className="font-medium">iPad Pro 2017 Model</span>
                  </td>
                  <td className="py-2.5 pr-4">
                    <span className="font-medium text-neutral-500">
                      15 May 2020 10:00 pm
                    </span>
                  </td>
                  <td className="py-2.5 pr-4">
                    <span className="rounded-full bg-green-500 bg-opacity-10 px-2.5 py-1 text-sm font-medium text-green-500">
                      Confirmed
                    </span>
                  </td>
                  <td className="py-2.5">
                    <a className="inline-flex py-2.5 pr-0" href="#">
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="mx-0.5 h-1 w-1 rounded-full bg-neutral-200"></span>
                      <span className="h-1 w-1 rounded-full bg-neutral-200"></span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="-m-2 flex flex-wrap items-center justify-between">
            <div className="w-auto p-2">
              <div className="-m-0.5 flex flex-wrap">
                <div className="w-auto p-0.5">
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-sm border hover:border-neutral-300"
                    href="#"
                  >
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 10.6666L1.33333 5.99998L6 1.33331"
                        stroke="#71717A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="w-auto p-0.5">
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-sm border hover:border-neutral-300"
                    href="#"
                  >
                    <span className="text-sm font-semibold text-neutral-400">
                      1
                    </span>
                  </a>
                </div>
                <div className="w-auto p-0.5">
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-sm border border-neutral-600"
                    href="#"
                  >
                    <span className="text-sm font-semibold">2</span>
                  </a>
                </div>
                <div className="w-auto p-0.5">
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-sm border hover:border-neutral-300"
                    href="#"
                  >
                    <span className="text-sm font-semibold text-neutral-400">
                      3
                    </span>
                  </a>
                </div>
                <div className="w-auto p-0.5">
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-sm border hover:border-neutral-300"
                    href="#"
                  >
                    <span className="text-sm font-semibold text-neutral-400">
                      4
                    </span>
                  </a>
                </div>
                <div className="w-auto p-0.5">
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-sm border hover:border-neutral-300"
                    href="#"
                  >
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.33335L5.66667 6.00002L1 10.6667"
                        stroke="#71717A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="w-auto p-0.5">
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-sm border hover:border-neutral-300"
                    href="#"
                  >
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.33335L5.66667 6.00002L1 10.6667"
                        stroke="#71717A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.33335L5.66667 6.00002L1 10.6667"
                        stroke="#71717A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-auto p-2">
              <p className="text-sm text-neutral-400">
                Showing 1 of 20 out of 157 results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountsTable;
