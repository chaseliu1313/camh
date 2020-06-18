import { useState, useEffect } from 'react';

const setMildResponse = (index, res) => {
  let state = [...res];
  state[index] = true;

  switch (index) {
    case 0:
      state[index + 1] = false;

      break;
    case 1:
      state[index - 1] = false;

      break;
    case 2:
      state[index + 1] = false;

      break;
    case 3:
      state[index - 1] = false;

      break;
    default:
      break;
  }

  return state;
};

const MildResInitialState = [false, false, false, false];

export const useMildPathwayRes = (index) => {
  const [responses, setRes] = useState(MildResInitialState);

  useEffect(() => {
    setMildResponse(index, responses);
  }, [index, setMildResponse]);

  return responses;
};
