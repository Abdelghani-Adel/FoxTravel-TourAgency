"use client";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/src/styles/main.css";

/**
 * This component is resbonsible for all processes needs to be invoked at the loading stage.
 * It import and provides all css files and redux store to the rest of the application.
 */

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    // Initialize the animation library configuration
    Aos.init({
      offset: 0,
      duration: 600,
      easing: "ease-in-out",
    });

    // Imoprt the bootstrap js files
    if (typeof document !== "undefined") {
      import("jquery");
      import("popper.js");
      //@ts-ignore
      import("bootstrap/dist/js/bootstrap.bundle.min");
    }
  }, []);
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
