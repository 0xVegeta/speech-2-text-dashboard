function TableHeader () {
  return (
    <div className="self-stretch bg-indigo-50 justify-start items-start inline-flex">
      <div className="w-[75px] self-stretch px-2 py-1.5 justify-start items-center gap-1 flex">
        <div className="rounded-md justify-start items-center gap-1 flex">
          <div className="w-4 h-4 relative">
            <div className="w-4 h-4 left-0 top-0 absolute bg-white rounded-md border border-stone-300" />
          </div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch px-3 py-2.5 justify-start items-center gap-2.5 flex">
        <div className="grow shrink basis-0 self-stretch text-neutral-700  font-normal font-['Inter'] leading-tight">
          Name
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch px-3 py-2.5 justify-start items-center gap-2.5 flex">
        <div className="grow shrink basis-0 self-stretch text-neutral-700  font-normal font-['Inter'] leading-tight">
          Type
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch px-3 py-2.5 justify-start items-center gap-2.5 flex">
        <div className="grow shrink basis-0 self-stretch text-neutral-700  font-normal font-['Inter'] leading-tight">
          Duration
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch px-3 py-2.5 justify-start items-center gap-2.5 flex">
        <div className="grow shrink basis-0 self-stretch text-neutral-700  font-normal font-['Inter'] leading-tight">
          Date Created
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch px-3 py-2.5 justify-start items-center gap-2.5 flex">
        <div className="grow shrink basis-0 self-stretch text-neutral-700  font-normal font-['Inter'] leading-tight">
          Last Updated
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch px-3 py-2.5 justify-start items-center gap-2.5 flex">
        <div className="grow shrink basis-0 self-stretch text-neutral-700  font-normal font-['Inter'] leading-tight">
          Action
        </div>
      </div>
    </div>
  );
}
export default TableHeader;