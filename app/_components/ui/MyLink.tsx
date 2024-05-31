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

const Navigate = (props: IProps) => {
  const { href, children, className } = props;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (isPending) {
      dispatch(loaderActions.showLoadingOverlay());
    }

    if (!isPending) {
      dispatch(loaderActions.hideLoadingOverlay());
    }
  }, [isPending]);

  return (
    <NextLink
      className={`${className ?? ""}`}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        startTransition(() => {
          router.push(href);
        });
      }}
    >
      {children}
    </NextLink>
  );
};

export default Navigate;
