import FolderIcon from "../icons/FolderIcon";
import HelpIcon from "../icons/HelpIcon";
import HomeIcon from "../icons/HomeIcon";
import SavedIcon from "../icons/SavedIcon";
import SettingsIcon from "../icons/SettingsIcon";
import ShareIcon from "../icons/ShareIcon";
import TrashIcon from "../icons/TrashIcon";
import UpgradeBox from "./UpgradeBox";

function Sidebar () {
	return (
		<div className="w-[250px] h-full p-6 flex flex-col justify-between">
			<div className="flex flex-col gap-6">
				<div className=" h-8 px-6 py-2 justify-start items-center gap-1 inline-flex">
					<h1 className="text-blue-800 text-xl font-bold font-['Gotham Pro'] leading-normal">
						abc firm
					</h1>
				</div>
				<div className="flex-col justify-start items-start gap-3 inline-flex text-xs">
					<div className="self-stretch px-2 flex-col justify-start items-start gap-3 flex">
						<div className="self-stretch flex-col justify-start items-start gap-1 flex">
							<div className="self-stretch px-4 py-2 cursor-pointer hover:bg-gray-50 transition-all duration-200 ease-in-out bg-sky-100 rounded border border-sky-100 justify-start items-center gap-1 inline-flex">
								<div className=" gap-3 flex">
									<HomeIcon />
									<div className="grow shrink basis-0 text-gray-900 text-xs font-medium font-['Inter'] leading-tight">
										Home
									</div>
								</div>
							</div>
							<div className="self-stretch px-4 py-2 cursor-pointer hover:bg-gray-50 transition-all duration-200 ease-in-out rounded justify-start items-center gap-1 inline-flex">
								<div className=" gap-3 flex">
									<FolderIcon />
									<div className="grow shrink basis-0 text-slate-700 text-xs font-normal font-['Inter'] leading-tight">
										All Files
									</div>
								</div>
							</div>
							<div className="self-stretch px-4 py-2 cursor-pointer hover:bg-gray-50 transition-all duration-200 ease-in-out rounded justify-start items-center gap-1 inline-flex">
								<div className=" gap-3 flex">
									<SavedIcon />
									<div className="grow shrink basis-0 text-slate-700 text-xs font-normal font-['Inter'] leading-tight">
										Saved
									</div>
								</div>
							</div>
							<div className="self-stretch px-4 py-2 cursor-pointer hover:bg-gray-50 transition-all duration-200 ease-in-out rounded justify-start items-center gap-1 inline-flex">
								<div className=" gap-3 flex">
									<ShareIcon />
									<div className="grow shrink basis-0 text-slate-700 text-xs font-normal font-['Inter'] leading-tight">
										Integrations
									</div>
								</div>
							</div>
							<div className="self-stretch px-4 py-2 cursor-pointer hover:bg-gray-50 transition-all duration-200 ease-in-out rounded justify-start items-center gap-1 inline-flex">
								<div className=" gap-3 flex">
									<TrashIcon />
									<div className="grow shrink basis-0 text-slate-700 text-xs font-normal font-['Inter'] leading-tight">
										Trash
									</div>
								</div>
							</div>
							<div className="self-stretch px-4 py-2 cursor-pointer hover:bg-gray-50 transition-all duration-200 ease-in-out rounded justify-start items-center gap-1 inline-flex">
								<div className=" gap-3 flex">
									<SettingsIcon />
									<div className="grow shrink basis-0 text-slate-700 text-xs font-normal font-['Inter'] leading-tight">
										Settings
									</div>
								</div>
							</div>
							<div className="self-stretch px-4 py-2 cursor-pointer hover:bg-gray-50 transition-all duration-200 ease-in-out rounded justify-start items-center gap-1 inline-flex">
								<div className=" gap-3 flex">
									<HelpIcon />
									<div className="grow shrink basis-0 text-slate-700 text-xs font-normal font-['Inter'] leading-tight">
										Help and Support
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<UpgradeBox />
		</div>
	);
}
export default Sidebar;
