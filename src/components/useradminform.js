import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
// import user from '../images/User.jpg';
import ModalLink from './modal';
import { AppContext } from '../AppContext';
import { getSocialNetworkImage, updateCard } from '../utils';

const UserAdminForm = () => {
	const { setCard, card, user } = useContext(AppContext);

	const [fullName, setFullName] = useState(card.fullName);
	const [jobTitle, setJob] = useState(card.jobTitle);
	const [bio, setBio] = useState(card.bio);
	const [socialLinks, setSocialLinks] = useState(card.socialLinks);
	const [profileImageUrl, setProfileImageUrl] = useState(card.profileImageUrl);
	useEffect(() => {
		setFullName(card.fullName);
		setJob(card.jobTitle);
		setBio(card.bio);
		setSocialLinks(card.socialLinks);
		setProfileImageUrl(card.profileImageUrl);
	}, [
		card.fullName,
		card.jobTitle,
		card.bio,
		card.socialLinks,
		card.profileImageUrl,
	]);
	const history = useHistory();
	const uploadImage = async (userImage) => {
		try {
			const formData = new FormData();
			formData.append('file', userImage);
			formData.append('upload_preset', 'cig52kqk');
			const response = await fetch(
				`https://api.cloudinary.com/v1_1/socialcard/upload`,
				{
					method: 'POST',
					body: formData,
				},
			);
			const data = await response.json();
			return data.secure_url;
		} catch (error) {
			console.error(error);
		}
	};

	const showPreview = async (event) => {
		if (event.target.files.length > 0) {
			const url = await uploadImage(event.target.files[0]);
			setProfileImageUrl(url);
		}
	};

	const addSocialLink = (newSocialNetwork, newUrl) => {
		setSocialLinks([
			...socialLinks,
			{
				socialNetwork: newSocialNetwork,
				url: newUrl,
			},
		]);
	};

	return (
		<div className="flex justify-center w-full">
			<div className="flex-1 flex flex-col items-center max-w-xl">
				<div className="border box-content flex flex-col overflow-hidden rounded-3xl w-full">
					<div className="flex">
						<div className="w-1/3 flex flex-col items-center justify-center">
							<img
								src={profileImageUrl}
								id="upload-preview"
								alt=""
								className=" ml-7 my-3 rounded-lg mt-4"
							/>
							<button className="bg-black cursor-pointer mb-8 ml-5 mt-auto px-5 py-2 relative rounded text-white">
								<span className="cursor-pointer">Upload Image</span>
								<input
									className="absolute cursor-pointer h-full left-0 opacity-0 top-0 w-full "
									type="file"
									onChange={(event) => {
										showPreview(event);
									}}
								/>
							</button>
						</div>
						<form className="flex flex-col p-4 pt-5 w-2/3 ml-4">
							<input
								id="fullName"
								maxLength="40"
								autoFocus={true}
								autoComplete="on"
								className="border border-solid mb-2 px-1 py-1.5 rounded outline-none"
								placeholder="Full Name"
								type="text"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
							/>
							<input
								id="jobTitle"
								maxLength="40"
								className="border border-solid mb-2 px-1 py-1.5 rounded outline-none"
								placeholder="Job Type"
								type="text"
								value={jobTitle}
								onChange={(e) => setJob(e.target.value)}
							/>
							<textarea
								maxLength="250"
								id="bio"
								className="border border-solid mb-2 px-1 pb-28 rounded outline-none resize-none"
								placeholder="Bio"
								type="text"
								value={bio}
								onChange={(e) => setBio(e.target.value)}
							/>
							<div className="flex flex-row mb-4">
								{(socialLinks ?? []).map((link) => (
									<div
										key={link.socialNetwork}
										className="relative w-10 h-10 mr-5">
										<img
											key={link.socialNetwork}
											className="w-full"
											src={getSocialNetworkImage(link.socialNetwork)}
											alt=""
										/>
										<div
											onClick={() => {
												setSocialLinks(
													socialLinks.filter(
														(socialLink) =>
															socialLink.socialNetwork !== link.socialNetwork,
													),
												);
											}}
											className="cursor-pointer -mr-2 flex justify-center items-center absolute top-0 right-0 h-5 w-5 bg-red-600 text-white rounded text-center">
											×
										</div>
									</div>
								))}
							</div>
							<div className="flex mb-4 items-center">
								<ModalLink
									socialLinks={socialLinks}
									addSocialLink={addSocialLink}
								/>
								<div className="text-gray-400">Add social link</div>
							</div>
						</form>
					</div>
					<button
						onClick={async (e) => {
							e.preventDefault();
							try {
								const userData = await updateCard({
									username: user.username,
									jobTitle: jobTitle,
									bio: bio,
									fullName: fullName,
									socialLinks: socialLinks,
									profileImageUrl: profileImageUrl,
								});

								setCard(userData);
								history.push(`/u/${user.username}`);
							} catch (error) {
								console.error(error);
							}
						}}
						type="submit"
						className="bg-green-500 hover:bg-green-600 p-3 rounded text-white">
						Save and View Profile
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserAdminForm;
