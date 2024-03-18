import Collabse from "@/app/_components/ui/Collabse";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Itenrary = () => {
  return (
    <Collabse Header={Header}>
      <div className="d-flex gap-4">
        <div>
          <Image
            className="rounded-3 overflow-hidden"
            src="/img/hotelDetails/1.png"
            width={250}
            height={200}
            alt=""
          />
        </div>
        <div>
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti impedit id fugit
            reprehenderit alias nihil eos doloribus, dicta quas quaerat, dolore deserunt earum a
            amet ad rerum aspernatur quam exercitationem laborum sunt similique. Et, consectetur eum
            architecto ex corporis perspiciatis! A, deserunt totam nostrum temporibus reprehenderit
            atque voluptas illum nemo dolor commodi explicabo! Provident at dolorum accusamus animi
            debitis.
          </p>
          <div className="d-flex gap-3">
            <div className="d-flex align-items-center gap-2">
              <h6 className="mb-0">Accommodation: </h6>
              <Link href="/hotels/1" className="fw-light">
                <span>SunRise Makadi</span>
              </Link>
            </div>
            <div className="d-flex align-items-center gap-2">
              <h6 className="mb-0">Transportation: By Bus</h6>
            </div>
          </div>
        </div>
      </div>
    </Collabse>
  );
};

const Header = () => {
  return <h5>Day 1 : Drive to El-Gouna Resort</h5>;
};

export default Itenrary;
