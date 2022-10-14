import { useState, useEffect, useCallback } from 'react';

//customized hook for marking navigation bar location
export function useNavClicks(location) {
  const [state, setClickState] = useState([]);

  //initial value

  const stateSwitcher = useCallback((arr) => {
    switch (arr) {
      case '/overview': //0
        return ['false', 'true', 'false', 'false', 'false', 'false', 'false'];

      case '/assessment': //1
        return ['false', 'false', 'true', 'false', 'false', 'false', 'false'];

      case '/assessment/pears': //2
        return ['false', 'false', 'true', 'false', 'false', 'false', 'false'];

      case '/assessment/tools': //3
        return ['false', 'false', 'true', 'false', 'false', 'false', 'false'];

      case '/treatment/mild': //4
        return ['false', 'false', ' false', 'true', ' true', 'false', 'false'];

      case '/treatment/severe': //5
        return ['false', 'false', 'false', 'true', 'true', 'false', 'false'];

      case '/resources/tools/video': //6
        return ['false', 'false', 'false', 'false', 'false', 'true', 'false'];

      case '/resources/help': //7
        return ['false', 'false', 'false', 'false', 'false', 'true', 'false'];

      case '/resources/reference': //8
        return ['false', 'false', 'false', 'false', 'false', 'true', 'false'];

      case '/resources/crisisLines': //9
        return ['false', 'false', 'false', 'false', 'false', 'true', 'false'];

      case '/orientation': //10
        return ['false', 'false', 'false', 'false', 'false', 'false', 'true'];

      case '/resources/faq': //11
        return ['false', 'false', 'false', 'false', 'false', 'true', 'false'];

      default: //default
        return ['false', 'false', 'false', 'false', 'false', 'false', 'false'];
    }
  }, []);
  //handle change
  useEffect(() => {
    setClickState(stateSwitcher(location));
  }, [location, stateSwitcher]);

  return state;
}
