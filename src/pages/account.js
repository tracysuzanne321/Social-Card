import AccountSettings from '../components/accountsettings';

const Account = () => {
	return (
		<>
			<div className="flex flex-col items-center">
				<h1 className="text-3xl mb-4  ">My Account.</h1>

				<div className=" w-full max-w-lg mt-4 mb-16  sm:mx-0  ">
					<AccountSettings />
				</div>
			</div>
		</>
	);
};

export default Account;
