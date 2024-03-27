import { loaderActions } from "@/app/_redux/slices/loaderSlice";
import { useAppDispatch } from "@/app/_redux/store";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const SubmitBtn = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(loaderActions.showLoadingOverlay());
    router.push("/search-result");
  };

  return (
    <button type="button" className="foxBtn secondBtn" onClick={clickHandler}>
      <FaSearch /> Search
    </button>
  );
};

export default SubmitBtn;
