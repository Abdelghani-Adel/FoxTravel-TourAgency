import { loaderActions } from "@/src/redux/slices/loaderSlice";
import { useAppDispatch } from "@/src/redux/store";
import Link from "next/link";
import React from "react";

const FoxCard = ({ children, url }: Readonly<{ children: React.ReactNode; url: string }>) => {
  const dispatch = useAppDispatch();
  const onNavigate = () => dispatch(loaderActions.showLoadingOverlay());

  return (
    <Link href={url} className="foxCard" onClick={onNavigate}>
      {children}
    </Link>
  );
};

export default FoxCard;
