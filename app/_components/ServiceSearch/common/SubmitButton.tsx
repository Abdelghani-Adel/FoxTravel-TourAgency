import Link from "next/link";
import React from "react";

const SubmitButton = ({ link }: { link: string }) => {
  return (
    <Link href={link} className="ss_submitBtn">
      Search
    </Link>
  );
};

export default SubmitButton;
