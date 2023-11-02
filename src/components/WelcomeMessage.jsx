import TranscribeButton from "./TranscribeButton";

function WelcomeMessage ( { openPopup } ) {
  return (
    <div className=" justify-between items-between inline-flex">
      <div className="flex-col justify-between items-between  inline-flex">
        <div className="text-black text-xl font-semibold font-['Inter'] leading-[28.80px]">
          Welcome Shakirat
        </div>
        <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-normal">
          Upload your audio and Video to covert to text
        </div>
      </div>
      <TranscribeButton openPopup={openPopup} />
    </div>
  );
}
export default WelcomeMessage;