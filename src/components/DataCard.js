const Card = ({props}) => {
	return (
		<div className=" lg:w-48 xl:w-56 rounded-xl shadow-xl bg-white shadow-slate-200/90 border-2 border-slate-200 p-2 px-5 ">
			<div
				className={
					"text-2xl h-9 w-9 text-white min-w-min rounded-full " +
					props?.color +
					" flex justify-center items-center p-1 "
				}>
				{props.icon}
			</div>
			<h3 className=" text-sm ">{props?.name}</h3>
			<div className=" flex flex-row justify-between items-center">
				<h2 className=" text-xl font-bold ">{props.ammount}</h2>
				<h3 className=" text-xs p-1 px-2 bg-green-300/70 rounded-full ">
					{props.margin}
				</h3>
			</div>
		</div>
	);
};

export default Card;
