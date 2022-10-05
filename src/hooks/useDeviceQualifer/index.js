import { useEffect, useState } from "react";

const useDeviceQualifer = () => {
  const [selectDevice, setSelectDevice] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
  });
  const [screenWidth, setScreenWidth] = useState({
    winWidth: window.innerWidth,
  });

  const detectSize = () => {
    setScreenWidth({
      winWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth.winWidth < 560) {
      setSelectDevice({ tablet: false, mobile: true, desktop: false });
    } else if (screenWidth.winWidth < 700) {
      setSelectDevice({ tablet: true, mobile: false, desktop: false });
    } else {
      setSelectDevice({ tablet: false, mobile: false, desktop: true });
    }
  }, [screenWidth]);


  const { mobile, tablet, desktop } = selectDevice;
  return { mobile, tablet, desktop };
};

export default useDeviceQualifer;
