export default function Placeholder({ className = "" }) {
  return (
    <div
      className={`bg-neutral-200 rounded-lg flex items-center justify-center ${className}`}
    >
      <span className="text-xs text-neutral-400">이미지 영역</span>
    </div>
  );
}

