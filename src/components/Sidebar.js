import React from "react";
import { FiPieChart} from "react-icons/fi"
import { BsTags} from "react-icons/bs"
import { TbCalendarStats} from "react-icons/tb"
import { FaRegUserCircle} from "react-icons/fa"
import { AiOutlineSetting} from "react-icons/ai"


const Sidebar = () => {
	return (
		<div className=" h-full flex flex-col justify-between items-center bg-gradient-to-b rounded-3xl from-[#4285F4] p-10 to-[#3C83F9] mx-5 ">
			<div className=" flex flex-col space-y-10 ">
				<h1 className=" text-2xl font-bold text-white">Board.</h1>
				<ul className=" flex flex-col space-y-4 text-white">
					<li className=" flex flex-row items-center gap-3 font-semibold "><FiPieChart/>Dashboard</li>
					<li className=" flex flex-row items-center gap-3 "><BsTags/>Transactions</li>
					<li className=" flex flex-row items-center gap-3 "><TbCalendarStats/>Schedules</li>
					<li className=" flex flex-row items-center gap-3 "><FaRegUserCircle/>Users</li>
					<li className=" flex flex-row items-center gap-3 "><AiOutlineSetting/>Setting</li>
				</ul>
			</div>
			<div className=" flex flex-col space-y-2 text-white ">
				<h3 className=" text-xs ">Help</h3>
				<h4 className=" text-xs ">Contact Us</h4>
			</div>
		</div>
	);
};

export default Sidebar;
