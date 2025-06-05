import Nav from "../components/nav";
import Sidebar from "../components/side";
import DashboardCard from "../components/dashcard";
import RightNav from "../components/rightnav";
import {
  HiMiniArrowsRightLeft,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import { LuChevronsLeftRight, LuRefreshCcw } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import SearchBar from "../components/searchbar";

const dummyData = [
  {
    id: 1,
    title: "ChatBot App",
    description: "Conversational assistant",
    status: "Active",
  },
  {
    id: 2,
    title: "Image Classifier",
    description: "Identifies animals",
    status: "Draft",
  },
  {
    id: 3,
    title: "Voice Assistant",
    description: "Voice command AI",
    status: "Active",
  },
  {
    id: 4,
    title: "Native Speach Generation",
    description: "Generate high quality text to speech",
    status: "New",
  },
];

export default function Dash() {
  return (
    <div className="flex h-screen bg-blue-50">
      <Sidebar />
      <div className="grid grid-cols-[1fr_70px] grid-rows-[80px_1fr] w-full">
        <Nav />
        <main>
          <div className=" bg-white h-full rounded-[30px]">
            <ul className="flex gap-4 text-lg p-10 pt-5 pb-2">
              <li className="flex-1 font-medium text-gray-700">Chat Prompt</li>
              <li>
                <button className="block w-full text-left p-2  font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
                  <HiOutlineClipboardDocumentList />
                </button>
              </li>
              <li>
                <button className="block w-full text-left p-2  font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
                  <LuChevronsLeftRight />
                </button>
              </li>
              <li>
                <button className="block w-full text-left p-2  font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
                  <IoShareSocialOutline />
                </button>
              </li>
              <li>
                <button className="block w-full text-left p-2  font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
                  <HiMiniArrowsRightLeft />
                </button>
              </li>
              <li>
                <button className="block w-full text-left p-2  font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
                  <LuRefreshCcw />
                </button>
              </li>
              <li>
                <button className="block w-full text-left p-2  font-medium text-gray-500 rounded-[100px] hover:bg-gray-200 flex gap-3 items-center">
                  <BsThreeDotsVertical />
                </button>
              </li>
            </ul>
            <div className="h-[1px] bg-gray-300 w-250 ml-7"></div>

            <h1 className="font-normal text-[50px] mt-10 pl-70 bg-gradient-to-r from-sky-950 via-blue-800 to-blue-400 inline-block text-transparent bg-clip-text">
              Welcome to AI Studio
            </h1>
            <SearchBar />
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start bg-white  rounded-[30px]">
              {dummyData.map((project) => (
                <DashboardCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </main>
        <RightNav />
      </div>
    </div>
  );
}
