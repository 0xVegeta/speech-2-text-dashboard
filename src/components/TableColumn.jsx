function TableColumn({ entry }) {
	return (
		<div className="self-stretch border-b border-zinc-100 justify-start items-start inline-flex">
			<div className="w-[75px] self-stretch px-2 py-1.5 justify-start items-center gap-1 flex">
				<div className="rounded-md justify-start items-center gap-1 flex">
					<div className="w-4 h-4 relative">
						<div className="w-4 h-4 left-0 top-0 absolute bg-white rounded-md border border-stone-300" />
					</div>
				</div>
			</div>
			<div className="grow shrink basis-0 self-stretch px-3 py-2.5 justify-start items-center gap-2.5 flex">
				<div className="grow shrink basis-0 self-stretch text-neutral-700  font-normal font-['Inter'] leading-tight">
					{entry.Name}
				</div>
			</div>
			<div className="grow shrink basis-0 self-stretch px-3 py-2.5 justify-start items-center gap-2.5 flex">
				<div className="grow shrink basis-0 self-stretch text-neutral-700  font-normal font-['Inter'] leading-tight">
					{entry.Type}
				</div>
			</div>
			<div className="grow shrink basis-0 self-stretch px-3 py-2.5 justify-start items-center gap-2.5 flex">
				<div className="grow shrink basis-0 self-stretch text-neutral-700  font-normal font-['Inter'] leading-tight">
					{entry.Duration}
				</div>
			</div>
			<div className="grow shrink basis-0 self-stretch px-3 py-2.5 justify-start items-center gap-2.5 flex">
				<div className="grow shrink basis-0 self-stretch text-neutral-700  font-normal font-['Inter'] leading-tight">
					{entry.DateCreated}
				</div>
			</div>
			<div className="grow shrink basis-0  px-3 py-2.5 justify-start items-center gap-2.5 flex">
				<div className="grow shrink basis-0 self-stretch text-neutral-700  font-normal font-['Inter'] leading-tight">
					{entry.LastUpdated}
				</div>
			</div>
			<div className="grow shrink basis-0  px-3 py-2.5 justify-start items-center gap-2.5 flex">
				<div className="grow shrink basis-0 self-stretch text-blue-800  font-normal font-['Inter'] leading-tight">
					{entry.Action}
				</div>
			</div>
		</div>
	);
}
export default TableColumn;
