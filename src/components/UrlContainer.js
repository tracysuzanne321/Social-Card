import copy from '../images/Copy.svg';

export const UrlContainer = ({ username }) => (
	<div className="flex items-center justify-center mb-8 mt-4 text-3xl text-center">
		example.co.uk/u/<div className="text-green-500">{username}</div>
		<div>
			<a href="" title="Copy your card to clipboard">
				<img
					className="ml-2 h-7 w-7 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..."
					src={copy}
				/>
			</a>
		</div>
	</div>
);
