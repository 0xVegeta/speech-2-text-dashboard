import BellIcon from "../icons/BellIcon";
import SearchIcon from "../icons/SearchIcon";

function Navbar() {
	return (
		<div className="h-12 px-6 bg-white flex justify-between items-center ">
			<div className="relative">
				<input
					type="text"
					className="w-[500px] h-8 pr-2 pl-10 text-sm bg-gray-50 rounded-sm border caret-gray-500 text-gray-500 border-gray-50  focus:border-gray-100 focus:border focus:outline-none "
					placeholder="Search here..."
				/>
				<SearchIcon />
			</div>
			<div className="justify-end items-center gap-3 flex">
				<div className="w-7 h-7 p-1.5 bg-gray-100 rounded-[20px] justify-center items-center flex">
					<BellIcon />
				</div>
				<div className="justify-end items-center gap-2 flex">
					<div className="w-7 h-7 justify-center items-center flex">
						<img
							className="w-7 h-7 rounded-[200px] border border-white object-cover"
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Navbar;
