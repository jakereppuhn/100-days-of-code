import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

type Props = {
	children?: React.ReactNode;
};

const Layout = (props: Props) => {
	const [isSidebarOpen, setSidebarOpen] = useState(() => {
		const saved = localStorage.getItem('sidebarState');
		return saved !== null ? JSON.parse(saved) : false;
	});

	useEffect(() => {
		localStorage.setItem('sidebarState', JSON.stringify(isSidebarOpen));
	}, [isSidebarOpen]);

	return (
		<div className="h-screen w-screen bg-red-50 flex">
			<Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
			<div className="flex flex-col grow bg-blue-500">
				<Navbar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
				<div className="flex-1 overflow-auto bg-gray-100 p-4 flex">{props.children}</div>
			</div>
		</div>
	);
};

export default Layout;
