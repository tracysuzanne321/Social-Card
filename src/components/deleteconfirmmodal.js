import React, { useState, useContext } from 'react';
import { deleteUser, logOut } from '../utils';
import { AppContext } from '../AppContext';
import { useHistory } from 'react-router';

export default function DeleteConfirmModal() {
	const [open, setOpen] = useState(false);
	const { setUser, setCard } = useContext(AppContext);
	const history = useHistory();

	return (
		<>
			<button
				className="    false
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
            "
				color="black"
				type="button"
				onClick={(e) => setOpen(true)}
				ripple="light">
				Confirm
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
							<div className="text-gray-900 text-1xl  mt-4 mb-2">
								Your SocialCard account has been deleted.
							</div>
						</div>

						<div className="flex items-center justify-end gap-4">
							<button
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
                            "
								onClick={async (e) => {
									e.preventDefault();
									setOpen(false);
									const result = await deleteUser();
									if (result.message === 'success') {
										await logOut();
										setUser({
											username: '',
											email: '',
										});
										setCard({
											fullName: '',
											jobTitle: '',
											bio: '',
											socialLinks: [],
											profileImageUrl: '',
										});
										history.push('/');
									}
								}}>
								ok
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
