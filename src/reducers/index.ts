import { ReducersMapObject, combineReducers } from 'redux';
import counter, { ICounterState } from './counter';

export interface IReduxState {
  counter: ICounterState;
}

export const reducers: ReducersMapObject<IReduxState, any> = {
  counter
};

export default combineReducers(reducers);
