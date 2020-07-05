import {
  UPDATE_SEVERE_TREATMENT,
  UPDATE_MILD_TREATMENT,
  RESET_SEVERE_TREATMENT,
  RESET_MILD_TREATMENT,
} from './actions';
import { Mild_initial_state, Sever_initial_state } from './store';

export const treatmentReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SEVERE_TREATMENT:
      return { ...state, severState: action.payload };
    case UPDATE_MILD_TREATMENT:
      return { ...state, mildState: action.payload };
    case RESET_MILD_TREATMENT:
      return { ...state, mildState: Mild_initial_state };
    case RESET_SEVERE_TREATMENT:
      return { ...state, severState: Sever_initial_state };
    default:
      return state;
  }
};
