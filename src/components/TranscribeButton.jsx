function TranscribeButton ( { openPopup } ) {
  return (
    <div
      className="px-7 py-4 bg-blue-800 rounded-md flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer hover:bg-blue-900 transition-all duration-300 ease-in-out "
      onClick={openPopup}
    >
      <div className="justify-center items-center  inline-flex">
        <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-normal">
          Transcribe File
        </div>
      </div>
    </div>
  );
}
export default TranscribeButton;