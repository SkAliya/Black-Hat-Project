export default function SearchBar() {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-100 ring-1 ring-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-sm"
        />
      </div>
    </div>
  );
}
