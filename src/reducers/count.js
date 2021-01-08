import { INCREMENT, DECREMENT } from '../actions/index';

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
      break;
    case DECREMENT:
      return { value: state.value > 0 ? state.value - 1 : 0 };
      break;
    default:
      return state;
      break;
  }
};
