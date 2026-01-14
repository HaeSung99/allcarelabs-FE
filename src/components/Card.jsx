export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}

