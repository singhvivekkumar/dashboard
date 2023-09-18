// import {
// 	BarChart,
// 	Bar,
// 	Cell,
// 	XAxis,
// 	YAxis,
// 	CartesianGrid,
// 	Tooltip,
// 	Legend,
// 	ResponsiveContainer,
// } from "recharts";

import {
	CartesianGrid,
	BarChart,
	Bar,
	XAxis,
	Tooltip,
} from "recharts";

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
];

const Charts = () => {
	// const demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";
	return (
		<div>
			<div className=" flex flex-row justify-between items-center ">
				<h2 className=" text-xl font-semibold ">Activites</h2>

			<ul className=" flex flex-row items-center space-x-5 text-xs font-light ">
				<li> <p className=" inline-flex w-2 h-2 rounded-full bg-orange-500 mr-2 "></p> Guset </li>
				<li> <p className=" inline-flex w-2 h-2 rounded-full bg-green-500 mr-2 "></p> Users </li>
			</ul>
			</div>

			<BarChart
				className=""
				width={900}
				height={200}
				data={data}
				barCategoryGap={60}
				maxBarSize={40}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid strokeDasharray="0 0 " />
				<XAxis />
				{/* <YAxis dataKey="name" /> */}
				<Tooltip />

				<Bar dataKey="pv" fill="#8884d8" />
				<Bar dataKey="uv" fill="#82ca9d" />
			</BarChart>
		</div>
	);
};

export default Charts;
