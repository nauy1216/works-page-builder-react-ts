const initialState = {
  count: 0
};

export type RootState = typeof initialState;

export default function counter(state = initialState, action) {
  const copy = { ...state };
  switch (action.type) {
    case 'INCREMENT':
      copy.count++;
      return copy;
    case 'DECREMENT':
      copy.count--;
      return copy;
    default:
      return state;
  }
}
