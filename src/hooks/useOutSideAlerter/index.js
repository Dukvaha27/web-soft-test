import React, { useEffect } from "react";

const useOutSideAlerter = ( ref, handler ) => {
  useEffect(() => {
    function clickHandler (event) {
      if (!ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
        document.removeEventListener("mousedown", clickHandler)
    };
  }, [ref, handler]);
};

export default useOutSideAlerter;
