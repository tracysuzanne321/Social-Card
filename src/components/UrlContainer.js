import { FaShareSquare } from 'react-icons/fa';

export const UrlContainer = ({ username }) => {
	const fullUrl = window.location.href;
	const urlPrefix = fullUrl.split('/u/')[0] + '/u/';
	return (
		<div className="flex items-center justify-center mb-8 mt-4 text-3xl text-center ">
			{urlPrefix}
			<div className="text-green-500">{username}</div>
			<div>
				<button
					title="Copy your card to clipboard"
					alt="Copy to clipboard"
					onClick={() => {
						navigator.clipboard.writeText(fullUrl);
					}}>
					<FaShareSquare className="cursor-pointer ml-5 h-7 w-7 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ... fill-current text-gray-400" />
				</button>
			</div>
		</div>
	);
};
