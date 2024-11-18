type Props = {
  onClick: () => void;
};

const MenuBtn = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center h-10 min-w-10 gap-1.5 bg-gray-200 border-2 border-[#f36c24] rounded-lg transition duration-300 ease-in-out "
    >
      <span className="bg-[#f36c24] w-5 h-[3px] rounded-sm" />
      <span className="bg-[#f36c24] w-5 h-[3px] rounded-sm" />
      <span className="bg-[#f36c24] w-5 h-[3px] rounded-sm" />
    </button>
  );
};

export default MenuBtn;
