import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const Layout = () => {
	return (
		<div className=" flex flex-row justify-center items-center lg:h-screen w-screen bg-slate-200/60 ">
			<div className=" w-1/5 lg:h-[95vh] ">
				<Sidebar />
			</div>
			<div className=" w-4/5 lg:h-[95vh] ">
				<Dashboard/>
			</div>
		</div>
	);
};

export default Layout;
