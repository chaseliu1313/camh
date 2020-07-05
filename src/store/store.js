import React, { useReducer } from 'react';
import { treatmentReducer } from './reducers';

export const Sever_initial_state = [
  false,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
export const Mild_initial_state = true;
export const TreatmentContext = React.createContext();
export const initialState = {
  severState: Sever_initial_state,
  mildState: Mild_initial_state,
};

export const TreatmentStore = (props) => {
  const [state, dispatch] = useReducer(treatmentReducer, initialState);

  return (
    <TreatmentContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TreatmentContext.Provider>
  );
};
