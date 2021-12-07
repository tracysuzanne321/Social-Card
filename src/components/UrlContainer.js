import URLModal from './urlmodal';

export const UrlContainer = ({ username }) => {
	const fullUrl = window.location.href;
	const urlPrefix = fullUrl.split('/u/')[0] + '/u/';
	return (
		<div className="flex items-center justify-center mb-8 mt-4 text-2xl text-center ">
			{urlPrefix}
			<div className="text-green-500">{username}</div>
			<div>
				<URLModal
					className="flex"
					title="Copy your card to clipboard"
					alt="Copy to clipboard"
					onClick={() => {
						navigator.clipboard.writeText(fullUrl);
					}}></URLModal>
			</div>
		</div>
	);
};
