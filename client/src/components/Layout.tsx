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
		<div className="flex h-screen">
			<Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
			<div className="flex-1 flex flex-col">
				<Navbar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
				<main className="flex-1 overflow-auto p-4">{props.children}</main>
			</div>
		</div>
	);
};

export default Layout;
