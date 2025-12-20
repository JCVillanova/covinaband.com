import { useEffect, useState } from "react";

function getWindowDimensions() {
    const hasWindow = typeof window !== "undefined";
    
    return {
      width: hasWindow ? window.innerWidth : null,
      height: hasWindow ? window.innerHeight : null,
    };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    // Add event listener when the component mounts
    window.addEventListener('resize', handleResize);
    // Call handleResize initially to set state
    handleResize();119.4

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}