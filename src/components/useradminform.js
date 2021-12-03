import { useState, useContext } from 'react';
import { useHistory } from 'react-router';
// import user from '../images/User.jpg';
import ModalLink from './modal';
import { AppContext } from '../AppContext';
import { updateCard } from '../utils';

const UserAdminForm = () => {
	const [name, setName] = useState('');
	const [job, setJob] = useState('');
	const [about, setAbout] = useState('');
	const [userImage, setUserImage] = useState('');
	const { setCard } = useContext(AppContext);
	const history = useHistory();

	const uploadImage = async () => {
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
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const showPreview = (event) => {
		if (event.target.files.length > 0) {
			const src = URL.createObjectURL(event.target.files[0]);
			const preview = document.getElementById('upload-preview');
			preview.src = src;
		}
	};

	return (
		<div className="flex justify-center w-full">
			<div className="flex-1 flex flex-col items-center max-w-xl">
				<div className="text-center text-4xl mb-8 mt-4">Edit Profile.</div>
				<div className="border box-content flex flex-col overflow-hidden rounded-3xl w-full">
					<div className="flex">
						<div className="w-1/3 flex flex-col items-center justify-center">
							<img
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
										setUserImage(event.target.files[0]);
										showPreview(event);
									}}
								/>
							</button>
						</div>
						<form className="flex flex-col p-4 pt-10 w-2/3 ml-4">
							<input
								id="fullName"
								maxLength="50"
								autoFocus={true}
								autoComplete="on"
								className="border border-solid mb-2 px-1 py-1.5 rounded outline-none"
								placeholder="Full Name"
								type="text"
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								id="jobTitle"
								maxLength="50"
								className="border border-solid mb-2 px-1 py-1.5 rounded outline-none"
								placeholder="Job Type"
								type="text"
								onChange={(e) => setJob(e.target.value)}
							/>
							<textarea
								maxLength="250"
								id="bio"
								className="border border-solid mb-2 px-1 py-1.5 rounded outline-none resize-none"
								placeholder="Bio"
								type="text"
								onChange={(e) => setAbout(e.target.value)}
							/>
							<div className="flex mb-4 items-center">
								<ModalLink />
								<div className="text-gray-400">Add social link</div>
							</div>
						</form>
					</div>
					<button
						onSubmit={async (e) => {
							e.preventDefault();
							try {
								const userData = await updateCard(name, job, about);
								setCard(userData);
								uploadImage();
								history.push('/');
							} catch (error) {
								console.log(error);
							}
						}}
						type="submit"
						className="bg-green-500 hover:bg-green-600 p-3 rounded text-white">
						Save Profile
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserAdminForm;
