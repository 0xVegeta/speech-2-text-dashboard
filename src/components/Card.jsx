function Card ( { icon, number, text } ) {
  return (
    <div className="grow shrink basis-0 p-4 bg-white rounded-xl border border-gray-200 flex-col justify-center items-start gap-4 inline-flex">
      <div className="w-7 h-7 p-1.5 bg-white rounded-[20px] border border-gray-200 justify-center items-center inline-flex">
        {icon}
      </div>
      <div className="self-stretch  flex-col justify-center items-start flex">
        <div className="self-stretch justify-center items-end gap-3 inline-flex">
          <div className="grow shrink basis-0 text-slate-700 text-xl font-semibold font-['Inter'] leading-normal">
            {number}
          </div>
        </div>
        <div className="self-stretch text-slate-600 text-xs font-normal font-['Inter'] leading-tight">
          {text}
        </div>
      </div>
    </div>
  );
}
export default Card;