import { useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';

type SidebarProps = {
	isOpen: boolean;
	toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
	const activeLink = 'text-blue-800 bg-blue-200';
	const inactiveLink = 'text-gray-600 hover:bg-gray-200';

	const sidebarLinks = [
		{
			text: 'Dashboard',
			iconPath:
				'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
			linkTo: '/',
			match: useMatch('/'),
		},
		{
			text: 'Calendar',
			iconPath:
				'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z',
			linkTo: '/calendar',
			match: useMatch('/calendar'),
		},
		{
			text: 'Users',
			iconPath:
				'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
			linkTo: '/users',
			match: useMatch('/users/*'),
		},
		{
			text: 'Accounts',
			iconPath:
				'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
			linkTo: '/accounts',
			match: useMatch('/accounts/*'),
		},
		{
			text: 'Contacts',
			iconPath:
				'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
			linkTo: '/contacts',
			match: useMatch('/contacts/*'),
		},
	];

	useEffect(() => {
		if (isOpen && window.innerWidth <= 640) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	const linkClass = (match: boolean) => `flex p-2 mx-2 rounded-md gap-2 ${match ? activeLink : inactiveLink}`;

	const sidebarClasses = [
		isOpen ? 'fixed md:relative w-3/4' : 'hidden md:block',
		'h-screen bg-white shadow z-30',
		isOpen && 'md:w-60',
		!isOpen && 'md:w-max',
	]
		.filter(Boolean)
		.join(' ');

	return (
		<aside className={sidebarClasses}>
			<button className="hidden" onClick={toggleSidebar}></button>
			<ul className="flex flex-col gap-2 pt-2">
				{sidebarLinks.map((link) => (
					<li key={link.text}>
						<Link to={link.linkTo} className={linkClass(!!link.match)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-6 w-6">
								<path strokeLinecap="round" strokeLinejoin="round" d={link.iconPath} />
							</svg>
							<span className={`${isOpen ? 'translate-x-0' : 'hidden'}`}>{link.text}</span>
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
