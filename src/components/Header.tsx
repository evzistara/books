import { GiBookCover } from "react-icons/gi";

export default function Header() {
  return (
    <div className=" bg-primary text-white p-4 text-2xl">
      <div className="flex items-center gap-4 max-w-7xl m-auto">
        <GiBookCover />
        <p>Library</p>
      </div>
    </div>
  );
}
