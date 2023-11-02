import RocketIcon from "../icons/RocketIcon";

function UpgradeBox() {
  return (
    <div className=" p-4 bg-sky-100 rounded-lg flex-col justify-center items-center gap-3 inline-flex">
      <RocketIcon />
      <div className="self-stretch  flex-col justify-center items-center gap-1 flex">
        <div className="text-center text-gray-900 text-xs font-semibold font-['Inter'] leading-tight">
          Upgrade Account
        </div>
        <div className="self-stretch text-center text-slate-600 text-[10px] font-normal font-['Inter'] leading-[17.40px]">
          Access to Unlimited Transcription
        </div>
      </div>
      <div className="self-stretch px-5 py-2 bg-blue-800 rounded-md justify-center items-center gap-2.5 inline-flex hover:bg-blue-900 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="justify-center items-center gap-1 flex">
          <div className="text-center text-sm text-white font-semibold font-['Inter'] leading-normal">
            Upgrade{" "}
          </div>
        </div>
      </div>
    </div>
  )
}
export default UpgradeBox