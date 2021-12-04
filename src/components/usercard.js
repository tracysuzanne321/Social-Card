import fBicon from '../images/facebook.png';
import iGicon from '../images/instagram.png';
import Ticon from '../images/twitter.png';
import Ghicon from '../images/github.png';
import Ldicon from '../images/linkedin.png';

const UserCard = ({
	profileImageUrl,
	fullName,
	jobTitle,
	bio,
	socialLinks,
}) => {
	const getSocialNetworkImage = (socialNetworkName) => {
		switch (socialNetworkName) {
			case 'facebook':
				return fBicon;
			case 'instagram':
				return iGicon;
			case 'twitter':
				return Ticon;
			case 'github':
				return Ghicon;
			case 'linkedin':
				return Ldicon;
			default:
				return '';
		}
	};

	return (
		<div className="w-full flex md:flex-row flex-col lg:ml-10 max-w-2xl mb-10 rounded-2xl shadow-2xl">
			<img
				className="md:w-1/3 max-h-96 md:rounded-l-2xl object-cover object-top rounded-t-2xl"
				src={profileImageUrl}
				alt=""
			/>
			<div className="md:w-2/3 flex-col flex-wrap px-4">
				<p className="mb-1 text-4xl mt-6">{fullName}</p>
				<p className="mb-1 text-base">{jobTitle}</p>
				<p className="mb-4 text-body">{bio}</p>
				<div className="flex flex-row mb-4 w-12 h-12">
					{socialLinks.map((link) => (
						<img
							key={link.socialNetwork}
							className="mr-2"
							src={getSocialNetworkImage(link.socialNetwork)}
							alt=""
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default UserCard;
