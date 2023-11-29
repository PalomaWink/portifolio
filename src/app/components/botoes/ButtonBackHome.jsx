
export default function ButtonBackHome() {
  return (
    <button
      className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#219EBC] to-[#8ECAE6] active:scale-95"
    >
      <span
        className="w-full h-full text-sm flex items-center gap-2 px-8 py-4 bg-[#25ABD0] text-[#ffff] rounded-[14px] bg-gradient-to-t from-[#1F91AD] to-[#217197]"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9.25l9-7 9 7v10.75a2 2 0 01-2 2h-5a2 2 0 01-2-2v-7h-4v7a2 2 0 01-2 2H5a2 2 0 01-2-2V9.25z"
          />
        </svg>
        Voltar à Home
      </span>
    </button>
  );
}