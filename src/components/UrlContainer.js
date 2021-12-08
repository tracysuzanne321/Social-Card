import URLModal from './urlmodal';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const UrlContainer = ({ username }) => {
	const fullUrl = window.location.href;
	const urlPrefix = fullUrl.split('/u/')[0] + '/u/';
	const { user } = useContext(AppContext);
	return (
		<div className="flex flex-wrap lg:flex-nowrap items-center justify-center mb-8 mt-4 text-lg text-center ">
			{user?.username !== '' && (
				<div className="text-green-500 mr-2">Share your unique URL:</div>
			)}
			{urlPrefix}

			<div className="text-green-500">{username}</div>
			<div>
				<URLModal
					className="flex"
					title="Copy your card to clipboard"
					alt="Copy to clipboard"
					url={fullUrl}></URLModal>
			</div>
		</div>
	);
};
