import { getSocialNetworkImage } from '../utils';

const UserCard = ({
	profileImageUrl,
	fullName,
	jobTitle,
	bio,
	socialLinks,
}) => {
	return (
		<>
			<div className="w-full flex md:flex-row flex-col lg:ml-10 max-w-2xl mb-10 rounded-2xl shadow-2xl">
				<img
					className="md:w-1/3 max-h-96 md:rounded-l-2xl object-cover object-top rounded-t-2xl"
					src={profileImageUrl}
					alt=""
				/>
				<div className="md:w-2/3 flex-col flex-wrap px-4">
					<p className="mb-2 text-4xl mt-6">{fullName}</p>
					<p className="mb-2 text-2xl">{jobTitle}</p>
					<p className="mb-4 text-body">{bio}</p>
					<div className="flex flex-row mb-4 w-12 h-12">
						{(socialLinks ?? []).map((link) => (
							<a key={link.socialNetwork} href={link.url}>
								<img
									className="mr-2 "
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
