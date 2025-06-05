import { Link } from "react-router-dom";
import { LuBuilding2, LuHistory } from "react-icons/lu";
import { LiaStreamSolid } from "react-icons/lia";
import { MdOutlineMarkChatUnread, MdOutlineVideoChat } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-50 p-4 hidden md:block">
      <h2 className="text-xl  mb-15 italic ">
        <span className="font-bold text-2xl">Google</span> AI Studio
      </h2>
      <ul className="space-y-2">
        <li>
          <Link
            to="/dashboard"
            className="block p-2 pl-5 bg-gray-200 font-medium  hover:bg-gray-200 text-gray-800  rounded-[100px] flex gap-3
            items-center"
          >
            <MdOutlineMarkChatUnread />
            Chat
          </Link>
        </li>
        <li>
          <button className="block w-full text-left p-2 pl-5 cursor-pointer font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
            <LiaStreamSolid />
            Stream
          </button>
        </li>
        <li>
          <button className="block w-full text-left p-2 pl-5 cursor-pointer font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
            <MdOutlineVideoChat />
            Generate Media
          </button>
        </li>
        <li>
          <button className="block w-full text-left p-2 pl-5 cursor-pointer font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
            <LuBuilding2 />
            Build
          </button>
        </li>
        <li>
          <button className="block w-full text-left p-2 pl-5 cursor-pointer font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
            <LuHistory />
            History
          </button>
        </li>
      </ul>
    </div>
  );
}
