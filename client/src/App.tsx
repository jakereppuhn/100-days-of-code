import { Routes, Route } from 'react-router-dom';
import { Calendar, Customers, Home, Users } from './pages';
import Test from './pages/Test';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/calendar/*" element={<Calendar />} />
			<Route path="/users/*" element={<Users />} />
			<Route path="/customers/*" element={<Customers />} />
			

			<Route path="/test/*" element={<Test />} />
		</Routes>
	);
};

export default App;
