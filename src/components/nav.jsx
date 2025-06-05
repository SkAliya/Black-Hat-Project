import { IoSettingsOutline } from "react-icons/io5";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="bg-blue-50 px-6 py-4 flex justify-end gap-6 items-center col-span-full row-span-1">
      <ul className="flex gap-4 items-center ">
        <li>
          <Link
            className="block p-2  font-bold text-lg hover:bg-gray-200  rounded-[100px] flex gap-3
            items-center"
          >
            Studio
          </Link>
        </li>
        <li>
          <button className="block w-full cursor-pointer text-left p-2  font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
            Dashboard
          </button>
        </li>
        <li>
          <button className="block w-full text-left p-2 cursor-pointer  font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
            Documentation
            <MdOpenInNew />
          </button>
        </li>
        <li>
          <button className="block w-full text-left p-2 cursor-pointer text-lg font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
            <IoSettingsOutline />
          </button>
        </li>
      </ul>
      <div className="w-9 h-9 bg-gray-300 rounded-full">
        <img src="./eyes-2.jpg" alt="my profile" className="rounded-full h-9" />
      </div>
    </div>
  );
}
