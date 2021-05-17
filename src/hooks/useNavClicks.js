import { useState, useEffect, useCallback } from 'react';

//customized hook for marking navigation bar location
export function useNavClicks(location) {
  const [state, setClickState] = useState([]);

  //initial value

  const stateSwitcher = useCallback((arr) => {
    switch (arr) {
      case '/overview':
        return ['false', 'true', 'false', 'false', 'false', 'false'];

      case '/assessment':
        return ['false', 'false', 'true', 'false', 'false', 'false'];

      case '/assessment/pears':
        return ['false', 'false', 'true', 'false', 'false', 'false'];

      case '/assessment/tools':
        return ['false', 'false', 'true', 'false', 'false', 'false'];

      case '/treatment/mild':
        return ['false', 'false', ' false', 'true', ' true', 'false'];

      case '/treatment/severe':
        return ['false', 'false', 'false', 'true', 'true', 'false'];

      case '/tools/video':
        return ['false', 'false', 'false', 'false', 'false', 'true'];

      case '/resources/help':
        return ['false', 'false', 'false', 'false', 'false', 'true'];

      case '/resources/reference':
        return ['false', 'false', 'false', 'false', 'false', 'true'];

      case '/resources/crisisLines':
        return ['false', 'false', 'false', 'false', 'false', 'true'];

      default:
        return ['false', 'false', 'false', 'false', 'false', 'false'];
    }
  }, []);
  //handle change
  useEffect(() => {
    setClickState(stateSwitcher(location));
  }, [location, stateSwitcher]);

  return state;
}
