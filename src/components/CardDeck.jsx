import FolderIcon from "../icons/FolderIcon";
import SavedIcon from "../icons/SavedIcon";
import TextIcon from "../icons/TextIcon";
import Card from "./Card";

function CardDeck() {
  return (
    <div className=" h-[120px] justify-start items-start gap-4 inline-flex">
      <Card icon={<FolderIcon />} text="Uploaded Files" number="100" />
      <Card icon={<TextIcon />} text="Transcribed" number="50" />
      <Card icon={<SavedIcon />} text="Saved" number="20" />
    </div>
  )
}
export default CardDeck