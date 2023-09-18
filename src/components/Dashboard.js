import React from "react";
import { BiBell } from "react-icons/bi";
import Card from "./DataCard";
import { listOfData } from "../utils/constant";
import Charts from "./Charts";
import ProfileCard from "./ProfileCard";
import Popup from "../popup/Popup";

const Dashboard = () => {
	return (
		<div className=" h-full mx-5 px-4 space-y-5 ">
			{/* header */}
			<div className=" flex flex-row items-center justify-between py-5 ">
				<div>
					<h1 className=" text-2xl font-bold ">Dashboard</h1>
				</div>
				<div className=" relative flex flex-row items-center space-x-5">
					<input
						type="search"
						placeholder="search...                 🔎︎"
						className=" bg-slate-200/50 hover:bg-slate-300/50 h-8 p-1 px-2 text-sm rounded-full border border-slate-200 focus:outline-none placeholder:text-slate-400 placeholder:text-center  "
					/>
					<ul className=" flex flex-row items-center space-x-4">
						<li className=" text-2xl ">
							<BiBell />
						</li>
						<li>
							<img
								alt="profile"
								src="https://lh3.googleusercontent.com/a/ACg8ocIRXcry73JAH1nBMAWtGYjw6LNNmPt20QN2rq20XWnGkLI=s360-c-no"
								className=" h-8 w-8 rounded-full"
							/>
						</li>
					</ul>
				</div>
			</div>
			{/* list cards */}
			<div className=" flex flex-row justify-between items-center">
				{listOfData?.map((item) => (
					<React.Fragment key={item?.name}>
						<Card props={item} />
					</React.Fragment>
				))}
			</div>
      {/* Activities charts */}
			<div className=" border-2 shadow-lg rounded-2xl bg-white p-5">
          <Charts/>
      </div>
      {/* Profile card */}
			<div className=" flex gap-8 justify-between items-center">
          <ProfileCard/>
          <Popup/>
      </div>
		</div>
	);
};

export default Dashboard;
