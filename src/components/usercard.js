import { getSocialNetworkImage } from '../utils';

const UserCard = ({
	profileImageUrl,
	fullName,
	jobTitle,
	bio,
	socialLinks,
	animated = false,
}) => {
	return (
		<>
			<div
				className={`w-full flex md:flex-row flex-col lg:ml-10 max-h-96 max-w-2xl mb-10 rounded-2xl shadow-2xl ${
					animated ? 'animate-fade-in-down' : ''
				}`}>
				<img
					className="md:w-1/3  md:rounded-l-2xl object-cover object-top rounded-t-2xl"
					src={profileImageUrl}
					alt=""
				/>
				<div className="md:w-2/3 flex-col flex-wrap px-4">
					<p className="mb-2 text-3xl mt-6">{fullName}</p>
					<p className="mb-2 text-lg font-bold">{jobTitle}</p>
					<p className="mb-4 text-body text-justify">{bio}</p>
					<div className="flex flex-row mb-4 ">
						{(socialLinks ?? []).map((link) => (
							<a
								key={link.socialNetwork}
								href={link.url}
								target="_blank"
								rel="noreferrer">
								<img
									className="mr-2 w-12 h-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ... fill-current "
									src={getSocialNetworkImage(link.socialNetwork)}
									alt=""
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default UserCard;
