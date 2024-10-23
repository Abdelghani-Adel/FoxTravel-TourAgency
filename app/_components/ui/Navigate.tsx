"use client";
import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";
import { loaderActions } from "@/app/_redux/slices/loaderSlice";
import { useAppDispatch } from "@/app/_redux/store";
import NextLink from "next/link";

type IProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const Navigate = ({ href, children, className = "" }: IProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (isPending) {
      dispatch(loaderActions.showLoadingOverlay());
    } else {
      dispatch(loaderActions.hideLoadingOverlay());
    }

    return () => {
      dispatch(loaderActions.hideLoadingOverlay());
    };
  }, [isPending, dispatch]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <NextLink className={className} href={href} onClick={handleClick}>
      {children}
    </NextLink>
  );
};

export default Navigate;
