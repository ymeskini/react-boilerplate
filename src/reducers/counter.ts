import produce from 'immer';
import { Reducer } from 'redux';
import { INCREMENT, DECREMENT } from '../actions/counter';

export type ICounterState = {
  readonly counter: number;
};

const initialState: ICounterState = {
  counter: 0
};

const counter: Reducer<ICounterState, any> = (state = initialState, action) =>
  produce<ICounterState>(state, draft => {
    switch (action.type) {
      case INCREMENT: {
        draft.counter += 1;
        return draft;
      }
      case DECREMENT:
        draft.counter -= 1;
        return draft;
      default:
        break;
    }
    return draft;
  });

export default counter;
