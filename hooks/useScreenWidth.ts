import { useState, useEffect } from "react";

function useScreenWidth() {
  // Initialize screenWidth to 0 and update when the component mounts
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    // Function to update screen width
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setScreenWidth(window.innerWidth);
      }
    };

    // Initial check if window is defined
    handleResize();

    // Listen to resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
}

export default useScreenWidth;
