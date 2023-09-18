import SignIn from "./components/SignIn";
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element:<SignIn/>
	},
	{
		path: "/dashboard",
		element: <Layout/>
	}
])

function App() {
	return (
		<RouterProvider router={router}>
			<div className=" min-w-[340px] m-auto ">
				<Outlet/>
			</div>
		</RouterProvider>
	);
}

export default App;
