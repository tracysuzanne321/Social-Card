import { LogInForm } from '../components/loginform';

const Login = () => {
	return (
		<>
			<div className="flex justify-center">
				<div className="bg-gray-100 border-gr drop-shadow-2xl max-w-md mt-10 mx-2 px-6 py-12 sm:p-12 rounded-xl shadow-2xl sm:mx-0 w-full">
					<h1 className="mb-9 mt-0 text-4xl text-center font-medium">Login.</h1>
					<LogInForm />
				</div>
			</div>
		</>
	);
};

export default Login;
