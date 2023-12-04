import { Layout } from '../components';

const Home = () => {
	return (
		<Layout>
			<div className="flex-1 flex-col flex gap-4">
				<div className="w-full h-max flex gap-4">
					<div className="h-32 w-full bg-white rounded shadow p-2">123</div>
					<div className="h-32 w-full bg-white rounded shadow p-2">123</div>
					<div className="h-32 w-full bg-white rounded shadow p-2">123</div>
					<div className="h-32 w-full bg-white rounded shadow p-2">123</div>
				</div>
				<div className="w-full h-max flex gap-4">
					<div className="h-96 w-3/4 bg-white rounded shadow p-2">123</div>
					<div className="h-96 w-1/4 bg-white rounded shadow p-2">123</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
