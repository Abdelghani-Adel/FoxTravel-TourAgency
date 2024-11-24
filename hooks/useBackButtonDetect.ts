import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { loaderActions } from "@/redux/slices/loaderSlice";
import { usePathname, useRouter } from "next/navigation";

const useBackButtonDetect = () => {
  const dispatch = useDispatch();
  // Get the current pathname from the router
  const pathname = usePathname();

  // Create a ref to store the previous pathname
  const ref = useRef(pathname);

  useEffect(() => {
    // Check if the pathname has changed and if the previous pathname was '/page'
    if (ref.current !== pathname) {
      dispatch(loaderActions.showLoadingOverlay());
      // For example, you could show a confirmation dialog or save some data
    }

    // Update the ref to store the current pathname
    ref.current = pathname;
  }, [pathname]);
  // let path = usePathname();
  // const router = useRouter();
  // const lastPathRef = useRef({ url: "", idx: 0 });
};

export default useBackButtonDetect;
