import { useState, useEffect, useCallback } from 'react';

//customized hook for marking navigation bar location
export function useNavClicks(location) {
  const [state, setClickState] = useState([]);

  const stateSwitcher = useCallback(() => {
    switch (location) {
      case '/overview':
        setClickState(['false', 'true', 'false', 'false', 'false', 'false']);
        break;
      case '/assessment':
        setClickState(['false', 'false', 'true', 'false', 'false', 'false']);

        break;
      case '/assessment/pears':
        setClickState(['false', 'false', 'true', 'false', 'false', 'false']);

        break;
      case '/assessment/tools':
        setClickState(['false', 'false', 'true', 'false', 'false', 'false']);

        break;
      case '/treatment/mild':
        setClickState(['false', 'false', ' false', 'true', ' true', 'false']);
        break;
      case '/treatment/severe':
        setClickState(['false', 'false', 'false', 'true', 'true', 'false']);
        break;
      case '/tools':
        setClickState(['false', 'false', 'false', 'false', 'false', 'true']);
        break;
      case '/help':
        setClickState(['false', 'false', 'false', 'false', 'false', 'true']);
        break;
      case '/reference':
        setClickState(['false', 'false', 'false', 'false', 'false', 'true']);
        break;
      default:
        setClickState(['false', 'false', 'false', 'false', 'false', 'false']);
        break;
    }
  }, [location, setClickState]);

  //initial value

  //handle change
  useEffect(() => {
    stateSwitcher();
  }, [location, stateSwitcher]);

  return state;
}
