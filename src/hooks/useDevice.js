import { useState, useEffect } from "react";
import { UAParser } from "ua-parser-js";

export function useDevice() {
  let parser = new UAParser();
  const deviceType = parser.getDevice().type;
  const angle = window.screen.orientation.angle;
  const [state, setState] = useState({
    isMobile:
      (deviceType && deviceType === "mobile") || deviceType === "tablet",
    isVertical: angle === 0 || angle === 180,
  });

  useEffect(() => {
    let isV = false;
    let isM = false;

    if ((deviceType && deviceType === "mobile") || deviceType === "tablet") {
      isM = true;
    } else {
      isM = false;
    }

    if (angle === 0 || angle === 180) {
      isV = true;
    }

    if (angle === 90 || angle === 270) {
      isV = false;
    }

    setState({ isMobile: isM, isVertical: isV });
  }, [window.screen.orientation.angle, parser.getDevice().type]);

  return state;
}
