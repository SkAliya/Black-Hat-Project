import { BsImages } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function RightNav() {
  return (
    <div className="bg-blue-50 px-2 py-4  col-start-2">
      <ul className="space-y-2 flex flex-col items-center gap-2">
        <li>
          <Link
            to="/dashboard"
            className="block p-2 bg-gray-200 font-bold text-lg  hover:bg-gray-200 text-gray-800  rounded-full flex gap-3
            items-center"
          >
            <GiSettingsKnobs />
          </Link>
        </li>
        <li>
          <button className="block w-full text-left p-2 cursor-pointer font-bold text-lg text-gray-500 rounded-full hover:bg-gray-200 flex gap-3 items-center">
            <BsImages />
          </button>
        </li>
      </ul>
      {/* <div className="w-10 h-10 bg-gray-300 rounded-full" /> */}
    </div>
  );
}
