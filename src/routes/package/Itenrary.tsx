import Link from "next/link";
import React from "react";

const Itenrary = () => {
  return (
    <div className="mb-2 border border-3 rounded-3">
      <div className="bg_secondary text_white rounded-3 p-2 mb-2">
        <h5 className="mb-0">Day 1 : Drive to El-Gouna Resort</h5>
      </div>

      <div className="px-3 pb-3">
        <p className="fw-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti impedit id fugit
          reprehenderit alias nihil eos doloribus, dicta quas quaerat, dolore deserunt earum a amet
          ad rerum aspernatur quam exercitationem laborum sunt similique. Et, consectetur eum
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
  );
};

export default Itenrary;
