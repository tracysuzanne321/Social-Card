import React, { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';

export default function ModalLink({ socialLinks, addSocialLink }) {
	const [open, setOpen] = useState(false);

	const [url, setUrl] = useState('');
	const allSocialNetworks = [
		'facebook',
		'twitter',
		'linkedin',
		'instagram',
		'github',
	];
	var leftoverSocialNetworks = allSocialNetworks.filter(
		(socialNetworkName) =>
			(socialLinks ?? [])
				.map((l) => l.socialNetwork)
				.some(
					(existingSocialNetworkName) =>
						existingSocialNetworkName === socialNetworkName,
				) === false,
	);
	const [socialNetwork, setSocialNetwork] = useState(
		leftoverSocialNetworks.length > 0
			? leftoverSocialNetworks[0]
			: 'Cannot select more networks',
	);
	return (
		<>
			<IoMdAddCircle
				className="w-10 h-10 cursor-pointer"
				color="black"
				type="button"
				onClick={(e) => setOpen(true)}
				ripple="light">
				Add Social Links
			</IoMdAddCircle>
			<div
				className={`
                    ${open ? '' : 'opacity-0 pointer-events-none'}
                    grid
                    place-items-center
                    overflow-x-hidden overflow-y-auto
                    fixed
                    inset-0
                    z-50
                    outline-none
                    focus:outline-none
                    transition-all
                    duration-500
                `}>
				<div
					className="
                    transform
                    opacity-100
                    translate-y-0
                    w-auto
                    my-6
                    mx-auto
                    max-w-3xl
                    transition-all
                    duration-500
                ">
					<div
						className="
                        border-0
                        p-6
                        rounded-lg
                        shadow-lg
                        flex flex-col
                        w-full
                        bg-white
                        outline-none
                        focus:outline-none
                    ">
						<div className="flex items-center justify-between mb-6">
							<h5 className="text-gray-900 text-2xl font-bold mt-0 mb-0">
								Add Social Links.
							</h5>
							<button
								onClick={(e) => {
									e.preventDefault();
									setOpen(false);
								}}
								className="
                                    p-1
                                    bg-transparent
                                    absolute
                                    top-2
                                    right-4
                                    text-gray-900 text-3xl
                                    leading-none
                                    outline-none
                                    focus:outline-none
                                ">
								<span className="text-gray-900 text-3xl block">×</span>
							</button>
						</div>
						<div className="relative flex-auto mb-6">
							<div
								className="
                                    flex flex-col
                                    text-base
                                    leading-relaxed
                                    text-gray-600
                                    font-normal
                                ">
								<input
									onChange={(e) => {
										setUrl(e.target.value);
									}}
									className="
                                    w-96
                                    outline-none
                                    border
                                    max-w-full
                                    border-gray-500
                                    rounded-md
                                    h-8
                                    "
									type="text"
									placeholder="Link URL"
								/>
								<select
									onChange={(e) => {
										setSocialNetwork(e.target.value);
									}}
									value={socialNetwork}
									className="outline-none border border-gray-500 h-8 rounded-md mt-5">
									{leftoverSocialNetworks.map((socialNetworkName) => (
										<option key={socialNetworkName} value={socialNetworkName}>
											{socialNetworkName}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className="flex items-center justify-end gap-4">
							<button
								onClick={(e) => {
									e.preventDefault();
									setOpen(false);
								}}
								className="
                                false
                                flex
                                items-center
                                justify-center
                                gap-1
                                font-bold
                                outline-none
                                uppercase
                                tracking-wider
                                focus:outline-none focus:shadow-none
                                transition-all
                                duration-300
                                rounded-lg
                                py-2.5
                                px-6
                                text-xs
                                leading-normal
                                bg-transparent
                                font-pop
                            ">
								Close
							</button>
							<button
								onClick={(e) => {
									e.preventDefault();
									setOpen(false);
									if (socialNetwork !== '' && url !== '') {
										addSocialLink(socialNetwork, url);
										leftoverSocialNetworks = leftoverSocialNetworks.filter(
											(socialNetworkName) =>
												socialNetworkName !== socialNetwork,
										);
										setSocialNetwork(leftoverSocialNetworks[0]);
									}
								}}
								className="
                                false
                                flex
                                items-center
                                justify-center
                                gap-1
                                font-bold
                                outline-none
                                uppercase
                                tracking-wider
                                focus:outline-none focus:shadow-none
                                transition-all
                                duration-300
                                rounded-lg
                                py-2.5
                                px-6
                                text-xs
                                leading-normal
                                text-white
                                bg-green-500
                                hover:bg-green-700
                                focus:bg-green-400
                                active:bg-green-800
                                shadow-md-green
                                hover:shadow-lg-green
                                font-pop
                            ">
								Add Link
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
