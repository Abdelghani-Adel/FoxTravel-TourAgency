import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import { loaderActions } from "../redux/slices/loaderSlice";

const useHideLoadingLayer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(loaderActions.hideLoadingOverlay());
    }, 1000);
  }, []);
};

export default useHideLoadingLayer;
