import React, { useState } from 'react';
import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';
import { IoMdAddCircle } from 'react-icons/io';

export default function ModalLink(link) {
	const [showModal, setShowModal] = useState(false);
	const [setLogo] = useState();
	const [setUrl] = useState();
	const [setIsPending] = useState(false);

	const setShowModalCode = (e) => {
		setShowModal(e);
	};

	return (
		<>
			<IoMdAddCircle
				className="w-10 h-10 cursor-pointer"
				color="black"
				type="button"
				onClick={(e) => setShowModalCode(true)}
				ripple="light">
				Add Social Links
			</IoMdAddCircle>

			<Modal
				size="large"
				active={showModal}
				toggler={() => setShowModal(false)}>
				<ModalHeader toggler={() => setShowModal(false)}>
					Add Social Links.
				</ModalHeader>
				<ModalBody>
					<div className=" flex flex-col text-base leading-relaxed text-gray-600 font-normal">
						<input
							className="w-96 outline-none border max-w-full border-gray-500 rounded-md h-8"
							type="text"
							placeholder="Link URL"
							onChange={(e) => setUrl(e.target.value)}
						/>
						<select
							className="outline-none border border-gray-500 h-8 rounded-md mt-5"
							value=""
							onChange={(e) => setLogo(e.target.value)}>
							<option value="Tracy">Linkedin</option>
							<option value="Dave">Twitter</option>
							<option value="Tracy">Facebook</option>
							<option value="Dave">Github</option>
						</select>
					</div>
				</ModalBody>
				<ModalFooter>
					<Button
						className="font-pop"
						color="black"
						buttonType="link"
						onClick={(e) => setShowModalCode(false)}
						ripple="dark">
						Close
					</Button>

					<Button
						className="font-pop"
						color="green"
						onClick={(e) => setShowModalCode(false)}
						ripple="light">
						Add Link
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
}
