import { Layout, SessionsTable } from '../components';

const Users = () => {
	return (
		<Layout>
			<div className="flex flex-1 gap-4 flex-col">
				<SessionsTable />
			</div>
		</Layout>
	);
};

export default Users;
