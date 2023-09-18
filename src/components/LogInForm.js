import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Dashboard from "./Dashboard";

const LogInForm = () => {
	const [successFull, setSuccessFull] = useState(false);

	const initialValues = {
		email: "",
		password: "",
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string().email().required(),
		password: Yup.string()
			.required()
			.min(8, "Password is too short - should be 8 chars minimum.")
			.matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
	});

	const handleSubmit = (values, helpers) => {
		axios
			.post("http://localhost:3002/api/", values)
			.then((response) => {
				console.log(response.data);
				setSuccessFull(response.data.status === 200 ? true : false);
			})
			.catch((error) => console.log(error.message));
		console.log(values);
	};

	return successFull ? (
		<Dashboard />
	) : (
		<div className=" flex flex-col h-full w-full">
			{/* sign in */}
			<div className=" py-4 ">
				<h1 className=" text-3xl font-bold">Sign In</h1>
				<p className=" text-lg ">Sign in to your account</p>
			</div>
			{/* button */}
			<div className="flex justify-between space-x-4 text-xs ">
				<button className=" inline-flex items-center p-1 px-4 text-slate-500 bg-white rounded-xl border border-slate-300 ">
					<FcGoogle className=" text-2xl lg:pr-2" /> Sign In with Google
				</button>
				<button className=" inline-flex items-center p-1 px-4 text-slate-500 bg-white rounded-xl border border-slate-300">
					<BsApple className=" text-2xl lg:pr-2" /> Sign In with Apple
				</button>
			</div>
			{/* form */}
			<div className="mt-8 mb-4">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{(props) => {
						console.log(props);
						return (
							<Form className=" bg-white rounded-2xl p-5 px-7 w-full  ">
								<div className=" flex flex-col justify-start items-baseline space-x-1 mb-5 ">
									<label htmlFor="email" className=" text-lg my-2">
										Name of event
									</label>
									<Field
										name="email"
										placeholder="Email"
										className=" bg-slate-200/70 hover:bg-slate-300/60 w-full rounded-md  focus:outline-none p-2 md:px-2 "
									/>
									<ErrorMessage
										name="email"
										component="p"
										className=" text-sm italic text-red-600  "
									/>
								</div>

								<div className=" flex flex-col justify-start items-baseline space-x-1 mb-5">
									<label
										htmlFor="password"
										className=" text-lg my-2">
										Password
									</label>
									<Field
										name="password"
										placeholder="Enter password "
										className="bg-slate-200/70 hover:bg-slate-300/60 w-full rounded-md  focus:outline-none p-2 md:px-2 "
									/>
									<ErrorMessage
										name="password"
										component="p"
										className=" text-sm italic text-red-600  "
									/>
								</div>

								<button
									type="submit"
									onClick={props.handleSubmit}
									className="border w-full border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
									Sign In
								</button>
							</Form>
						);
					}}
				</Formik>
			</div>
			<div className=" flex justify-center items-center ">
				<p className=" text-sm text-slate-500">Don't have an account?</p>
				<p className=" text-sm text-blue-600">Register here</p>
			</div>
		</div>
	);
};

export default LogInForm;
