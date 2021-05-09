import { Action, createStore } from 'redux';

const initState = {
  count: 0
};

export type RootState = typeof initState;

interface ActionData<T> extends Action<string> {
  data: T;
  reducer?: ReducerFunc<T>;
}

type ReducerFunc<T> = (state: RootState, action: ActionData<T>) => RootState;

function reducer(state: RootState = initState, action: ActionData<any>) {
  if (action.reducer) {
    return action.reducer(state, action);
  }
  return state;
}

const store = createStore(reducer);

export function createActionWithReducer<T>(type: string, reducer: ReducerFunc<T>) {
  return function createAction(data: T) {
    return store.dispatch({
      type,
      data,
      reducer
    });
  };
}

export function createActionWithReducerAsync<T>(type: string, reducer: ReducerFunc<T>) {
  return function createAction(data: T) {
    return store.dispatch({
      type,
      data,
      reducer
    });
  };
}

export const addCount = createActionWithReducer('ADD', function (state: RootState, action: ActionData<number>) {
  const copy = { ...state };
  copy.count += action.data;
  return copy;
});

export const incrCount = createActionWithReducer('INCR', function (state: RootState, action: ActionData<number>) {
  const copy = { ...state };
  copy.count += action.data;
  return copy;
});

export const incrCountAsync = createActionWithReducer('INCR', function (state: RootState, action: ActionData<number>) {
  const copy = { ...state };
  copy.count += action.data;
  return copy;
});

export default store;
