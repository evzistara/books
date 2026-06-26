import { GiBookCover } from "react-icons/gi";

export default function Header() { 

return(
    <div className="flex items-center bg-primary text-white p-4 gap-2">
        <GiBookCover />
        <p>Library</p>
    </div>

)
}