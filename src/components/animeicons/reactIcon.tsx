"use client";
import { useEffect } from "react";

import anime from "animejs/lib/anime.es.js";

export default function () {
  useEffect(() => {
    anime({
      targets: ".react-logo",
      scale: 1.2,
      easing: "easeInOutSine",
      loop: true,
      direction: "alternate",
      duration: 5000,
    });
  }, []);

  return (
    <>
      <img
        className="react-logo absolute w-40"
        src="https://ww2.freelogovectors.net/wp-content/uploads/2023/02/react-logo-freelogovectors.net_.png?lossy=1&w=2560&ssl=1"
        alt=""
      />
      <div className="demo-content motion-path-demo absolute">
        <div className="motion-path">
          <div className="small square shadow follow-path"></div>
          <div className="small square el follow-path"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1843"
            height="182"
            viewBox="0 0 1843 182"
            fill="none"
          >
            <path
              d="M1 181C264.5 142 297 -12.5 649.5 44C1300.64 148.367 1087.5 11.5 1843 0.5"
              stroke="none"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
