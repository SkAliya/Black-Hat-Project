export default function DashboardCard({ title, description, status }) {
  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <span
        className={`text-sm font-medium ${
          status === "Active" ? "text-green-600" : "text-yellow-600"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
