import React, { useState } from 'react';
import DeleteConfirmModal from './deleteconfirmmodal';

export default function DeleteModal() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				className="bg-green-500 hover:bg-green-600 p-1.5 rounded text-white  w-full mt-4 py-3 cursor-pointer "
				color="black"
				type="button"
				onClick={(e) => setOpen(true)}
				ripple="light">
				Delete Account
			</button>
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
                    bg-black
                    bg-opacity-70   
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
						<div className="flex flex-col items-center justify-between mb-6">
							<div className="text-gray-900 text-2xl text-bold mt-0 mb-0">
								We'll be sad to see you go.
							</div>
							<div className="text-gray-900 text-1xl  mt-4 mb-2">
								Are you sure you want to delete your SocialCard account?
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
								Cancel
							</button>
							<DeleteConfirmModal />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
