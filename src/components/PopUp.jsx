import CloseIcon from "../icons/CloseIcon";
import UploadIcon from "../icons/UploadIcon";

function PopUp({ isOpen, onClose }) {
	return (
		<div
			className={`fixed inset-0 z-10 flex items-center justify-center ${
				isOpen ? "block" : "hidden"
			}`}
		>
			<div className="fixed inset-0 bg-black opacity-50 "></div>
			<div className="z-10 p-4 mx-2 my-4 bg-white rounded-md shadow-lg">
				<button
					className="absolute top-0 right-0 m-2 text-gray-600"
					onClick={onClose}
				>
					Close
				</button>

				<div className="flex flex-col gap-4 px-4 py-5 w-[700px] h-[520px] justify-between">
					<div className="flex justify-between">
						<div className="text-xl font-bold font-['Inter']  text-center">
							Transcribe File
						</div>
						<button
							onClick={onClose}
							className="flex flex-col justify-center cursor-pointer rounded-full p-2 hover:bg-gray-50"
						>
							<CloseIcon />
						</button>
					</div>
					<div className="flex flex-col justify-between gap-2  text-sm ">
						<div className="flex flex-col gap-1 ">
							<label
								htmlFor="dropdown"
								className="text-xs font-medium"
							>
								Transcription Language
							</label>
							<select
								id="dropdown"
								className="p-2 rounded-md border border-gray-300 text-gray-400 focus:border focus:border-gray-500 focus:outline-none  "
							>
								<option>Default</option>
							</select>
						</div>
						<div className="border border-dashed rounded-md px-4 py-7 border-gray-300  w-full">
							<div className="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-4 inline-flex w-full">
								<div className="flex flex-col justify-center rounded-full p-2 bg-sky-100">
									<UploadIcon />
								</div>
								<div className="self-stretch h-14 flex-col justify-start items-center gap-0.5 flex">
									<div className="self-stretch justify-center items-center gap-1 inline-flex">
										<div className="rounded-md flex-col justify-center items-start gap-2.5 inline-flex">
											<div className="justify-center items-center gap-2 inline-flex">
												<div className="text-center text-blue-800 text-sm font-semibold font-['Inter'] leading-tight">
													Click to upload
												</div>
											</div>
										</div>
										<div className="text-slate-600 text-sm font-normal font-['Inter'] leading-tight">
											or drag and drop
										</div>
									</div>
									<div className="self-stretch text-center text-gray-400 text-xs font-normal font-['Inter'] leading-[17.40px]">
										The maximum file size is 1GB for audio
										and 10GB for videos.
										<br />
										Supported formats: mp3, mp4, wav, caf,
										aiff, avi, rmvb, flv, m4a, mov, wmv, wma
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-1 ">
							<label
								htmlFor="dropdown"
								className="text-xs font-medium"
							>
								Import from Link
							</label>
							<input
								id="dropdown"
								className="p-2 rounded-md border border-gray-300 text-gray-400 focus:border focus:border-gray-500 focus:outline-none "
								placeholder="Paste a Dropbox, Google Drive or Youtube URL here"
							/>
						</div>
						<div className="flex gap-2">
							<input
								type="checkbox"
								id="conf"
								name="conf"
								value="Speaker Identification"
							/>
							<label for="conf" className="text-sm font-medium">Speaker Identification</label>
						</div>
					</div>
					<button
						className="px-7 py-3 bg-blue-800 rounded-md flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer hover:bg-blue-900 transition-all duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed "
						disabled
					>
						<div className="justify-center items-center  inline-flex">
							<div className="text-center text-white text-sm font-semibold font-['Inter'] leading-normal">
								Transcribe File
							</div>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}
export default PopUp;
