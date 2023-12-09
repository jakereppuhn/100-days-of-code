const UsersTable = () => {
	const users = [
		{
			id: 1,
			name: 'John Doe',
			username: 'johndoe',
			email: 'johndoe@gmail.com',
			role: 'Admin',
			status: 'Active',
			createdAt: '2021-08-01',
		},
	];

	return (
		<div className="relative shadow-md sm:rounded-lg flex flex-col h-96">
			<div className="overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="p-4">
								<div className="flex items-center">
									<input
										type="checkbox"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
									/>
									<label className="sr-only">checkbox</label>
								</div>
							</th>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Username
							</th>
							<th scope="col" className="px-6 py-3">
								Email
							</th>
							<th scope="col" className="px-6 py-3">
								Role
							</th>
							<th scope="col" className="px-6 py-3">
								Status
							</th>
							<th scope="col" className="px-6 py-3">
								Created At
							</th>
							<th scope="col" className="px-6 py-3">
								Actions
							</th>
						</tr>
					</thead>
				</table>
			</div>
			<div className="overflow-y-auto">
				<table className="w-full text-sm text-left text-gray-500 overflow-y-auto">
					<tbody>
						{users.map((user) => (
							<tr key={user.id} className="bg-white border-b hover:bg-gray-50">
								<td className="w-4 p-4">
									<div className="flex items-center">
										<input
											id="checkbox-table-search-1"
											type="checkbox"
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
										/>
										<label className="sr-only">checkbox</label>
									</div>
								</td>
								<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{user.name}</td>
								<td className="px-6 py-4">{user.username}</td>
								<td className="px-6 py-4">{user.email}</td>
								<td className="px-6 py-4">{user.role}</td>
								<td className="px-6 py-4">{user.status}</td>
								<td className="px-6 py-4">{user.createdAt}</td>
								<td className="px-6 py-4">
									<a href="#" className="font-medium text-blue-600 hover:underline">
										Edit
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UsersTable;
