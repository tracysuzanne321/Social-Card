import React, { useState } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';
import urlVideo from '../images/video.mp4';

export default function URLModal({ url }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<AiOutlineCopy
				className="cursor-pointer ml-1.5 h-7 w-7 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ... fill-current text-gray"
				color="black"
				type="button"
				onClick={(e) => {
					navigator.clipboard.writeText(url);
					setOpen(true);
				}}
				ripple="light"></AiOutlineCopy>
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
                        max-w-sm
                    ">
						<div className="flex flex-col items-center justify-between mb-6 ">
							<div className="text-gray-900 text-2xl text-bold  mt-4 mb-2">
								Share with your contacts!
							</div>
							<div className="text-gray-900 text-lg mt-0 mb-0">
								Your unique SocialCard URL has been copied to your clipboard.
							</div>
							<div>
								<video
									className="mt-8 rounded-2xl"
									autostart
									muted
									autoPlay
									loop
									src={urlVideo}
								/>
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
								}}>
								OK
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
