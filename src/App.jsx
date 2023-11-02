import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import PopUp from "./components/PopUp";
import CardDeck from "./components/CardDeck";
import WelcomeMessage from "./components/WelcomeMessage";

export default function App () {
	const [isPopupOpen, setPopupOpen] = useState( false );

	const openPopup = () => {
		setPopupOpen( true );
	};

	const closePopup = () => {
		setPopupOpen( false );
	};
	return (
		<div className="w-screen h-screen bg-white justify-center items-start inline-flex overflow-auto">
			<PopUp isOpen={isPopupOpen} onClose={closePopup} />
			<Sidebar />
			<div className="grow bg-gray-50 h-full flex flex-col">
				<Navbar />
				<div className="grow px-6 py-7 flex flex-col gap-6">
					<WelcomeMessage openPopup={openPopup} />
					<CardDeck />
					<Table />
				</div>
			</div>
		</div>
	);
}
