import React from "react";
import { Cell, Pie, PieChart } from "recharts";

const data = [
	{ name: "Group A", value: 300 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
];
const COLORS = [ "#00C49F", "#FFBB28", "#FF8042"];

const ProfileCard = () => {
	return (
		<div className=" w-[45%] flex p-5 px-8 rounded-2xl border-2 border-slate-200 bg-white shadow-xl shadow-slate-300/50 ">
			<div className="flex flex-col justify-center w-1/2">
				<h2 className=" mb-2 text-lg font-bold ">Top products</h2>
				<div className=" ">
					<PieChart
						className=""
						width={125}
						height={125}
						onMouseEnter={onpointerenter}>
						<Pie
							data={data}
							innerRadius={45}
							outerRadius={60}
							fill="#8884d8"
							paddingAngle={-2}
							dataKey="value">
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
					</PieChart>
				</div>
			</div>
			<div className=" w-1/2 ">
				<h3 className=" text-slate-400 text-xs text-right font-light my-1 mb-3">12 May 2012</h3>
				<ul className=" flex flex-col justify-center ">
					<li>
						<div className="flex justify-start items-center ">
							<p className=" w-2 h-2 rounded-full bg-green-500/50 mr-2 "></p>
							<h2 className="text-sm font-bold ">Basic Trees</h2>
						</div>
						<h3 className=" ml-4 text-sm font-light ">55%</h3>
					</li>
					<li>
						<div className="flex justify-start items-center ">
							<p className=" w-2 h-2 rounded-full bg-yellow-500/50 mr-2 "></p>
							<h2 className="text-sm font-bold ">Basic Trees</h2>
						</div>
						<h3 className=" ml-4 text-sm font-light ">55%</h3>
					</li>
					<li>
						<div className="flex justify-start items-center ">
							<p className=" w-2 h-2 rounded-full bg-orange-500/50 mr-2 "></p>
							<h2 className="text-sm font-bold ">Basic Trees</h2>
						</div>
						<h3 className=" ml-4 text-sm font-light ">55%</h3>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProfileCard;
