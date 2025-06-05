import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to AI Studio</h1>
      <p className="mb-6 text-lg">Design and test your AI apps effortlessly</p>
      <Link
        to="/dashboard"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
