import TableData from "../config/TableData";
import TableColumn from "./TableColumn";
import TableHeader from "./TableHeader";

function Table () {
	return (
		<div className="w-full p-4  bg-white rounded-xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
			<div className="text-black text-sm font-semibold font-['Inter'] leading-snug">
				Recent Files
			</div>
			<div className="w-full h-px justify-center items-center inline-flex">
				<div className="w-full self-stretch bg-gray-200" />
			</div>
			<div className="self-stretch flex-col justify-start items-center text-xs gap-2 flex">
				<TableHeader />
				{TableData.map( ( entry ) => (
					<TableColumn entry={entry} />
				) )}

			</div>
		</div>
	);
}
export default Table;
