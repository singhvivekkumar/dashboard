import React, { useState } from "react";
import {
	BiLogoInstagram,
	BiLogoWhatsapp,
	BiLogoYoutube,
	BiMailSend,
} from "react-icons/bi";

const Profile = ({ props }) => {
	return (
		<div>
			<h1>Joe</h1>
			<ul>
				{/* <li className=" p-1 text-xs "><BiLogoWhatsapp/><p className=" underline text-xs ">{prpos?.}</p></li>
				<li className=" p-1 text-xs "><BiLogoInstagram/><p className=" underline text-xs ">{prpos?.}</p></li>
				<li className=" p-1 text-xs "><BiMailSend/><p className=" underline text-xs ">{prpos?.}</p></li>
				<li className=" p-1 text-xs "><BiLogoYoutube/><p className=" underline text-xs ">{prpos?.}</p></li> */}
			</ul>
		</div>
	);
};

const Basic = ({ props }) => {
	const [ second, setSecond] = useState(false)
	return (
		<div className="">
			<div className=" flex justify-between font-semibold">
				<h1 className=" text-xl py-4 ">Add New Profile</h1>
				<button
					onClick={props?.togglePopup}
					className=" text-sm font-light">
					X
				</button>
			</div>
			<br />
			{second === true ? (
				<div className=" flex flex-col justify-center gap-2">
				<div className="flex flex-row justify-evenly">
					<h2 className=" border-2 border-blue-500">Basic</h2>
					<h2 className=" border-2 border-slate-500">Contact</h2>
				</div>
				<div>
					<label className=" text-lg text-slate-700 ">
						Enter Name*
					</label>
					<input
						placeholder="Eg. John Doe"
						className="border border-slate-300  text-lg p-2 rounded-sm placeholder:text-slate-500 "
					/>
				</div>
				<div>
					<label>Enter Email*</label>
					<input
						placeholder="Eg. John Doe"
						className=" border border-slate-300 text-lg p-2 rounded-sm placeholder:text-slate-500 "
					/>
				</div>
				<div>
					<label>Enter Phone*</label>
					<input
						placeholder="Eg. John Doe"
						className="border border-slate-300  text-lg p-2 rounded-sm placeholder:text-slate-500 "
					/>
				</div>
				<button className=" text-white p-2 px-4 bg-blue-500"></button>
			</div>
			) : (
				<div className=" flex flex-col justify-center gap-2">
					<div className="flex flex-row justify-around">
						<h2 className=" text-lg border-b-2 border-blue-500">Basic</h2>
						<h2 className=" text-lg border-b-2 border-slate-500">Contact</h2>
					</div>
					<div className=" flex flex-col gap-1">
						<label className=" text-lg text-slate-700 ">
							Enter Name*
						</label>
						<input
							placeholder="Eg. John Doe"
							className="border border-slate-300  text-lg p-2 rounded-lg placeholder:text-slate-500 "
						/>
					</div>
					<div className=" flex flex-col gap-1">
						<label>Enter Email*</label>
						<input
							placeholder="Eg. John Doe"
							className=" border border-slate-300 text-lg p-2 rounded-lg placeholder:text-slate-500 "
						/>
					</div>
					<div className=" flex flex-col gap-1" >
						<label>Enter Phone*</label>
						<input
							placeholder="91"
							className="border border-slate-300  text-lg p-2 rounded-lg placeholder:text-slate-500 "
						/>
					</div>
					<div className=" flex justify-end">
					<button onClick={() => setSecond(true)} className=" text-right rounded-lg max-w-fit text-white p-2 px-4 bg-blue-500">Next</button>
					</div>
				</div>
			)}
		</div>
	);
};

const Social = () => {
	return <div></div>;
};

function Popup() {
	const [isOpen, setIsOpen] = useState(false);
	const [details, setDetails] = useState({
		name: "",
		whatsapp: "",
		instagram: "",
		youtube: "",
	});

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className=" h-full w-[45%] flex p-5 px-8 rounded-2xl border-2 border-slate-200 bg-white shadow-xl shadow-slate-300/50 ">
			<div className=" flex flex-col w-full h-40 border justify-center items-center">
				<button
					onClick={togglePopup}
					className=" text-xl w-10 h-10 font-extralight text-center bg-slate-200 border-2 rounded-full ">
					+
				</button>
				<h3 className=" text-slate-500 text-sm">Add Profile</h3>
			</div>
			{isOpen && (
				<div
					onClick={togglePopup}
					className=" fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
					<div className=" bg-white rounded-md shadow-md p-10  ">
						<Basic
							togglePopup={togglePopup}
							setDetails={setDetails}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Popup;
