import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

type IProps = {
  title: string;
  desc: string;
  target: string;
  btnTitle: string;
};

const SectionHeaderWithBtn = (props: IProps) => {
  const { title, desc, target, btnTitle } = props;

  return (
    <div className="sectionHeader">
      <div>
        <h3 className="sectionHeader_title">{title}</h3>
        <p className="sectionHeader_caption">{desc}</p>
      </div>

      <div>
        <button className="foxBtn secondBtn">
          <Link href={target}>
            {btnTitle} <GoArrowUpRight className="fs-3" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SectionHeaderWithBtn;
