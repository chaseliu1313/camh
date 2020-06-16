import { useState, useEffect } from 'react';
import logo from '../resource/logo_w_h.svg';
import logoV from '../resource/logo_w_v.svg';

//customized hook for changing navigation bar logo

export function useNavLogo() {
  const [windowWidth] = useState(window.innerWidth);
  const [navLogo, setLogo] = useState(logo);
  const switchLogo = (width) => {
    if (width < 395) {
      setLogo(logoV);
    } else setLogo(logo);
  };

  useEffect(() => {
    switchLogo(windowWidth);
  }, [windowWidth]);

  return navLogo;
}
