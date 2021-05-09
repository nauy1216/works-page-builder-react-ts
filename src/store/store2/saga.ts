// eslint-disable-next-line
import { put, call, take, fork } from 'redux-saga/effects';

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
  // 延迟 1s 在执行 + 1操作
  // yield call(delay, 200);
  yield put({ type: 'INCREMENT' });
}
function* watchIncrementAsync() {
  while (true) {
    const action = yield take('INCREMENT_ASYNC');
    console.log(action);
    yield fork(incrementAsync);
  }
}

function* decrementAsync() {
  // 延迟 1s 在执行 + 1操作
  // yield call(delay, 50);
  yield put({ type: 'DECREMENT' });
}
function* watchDecrementAsync() {
  while (true) {
    const action = yield take('DECREMENT_ASYNC');
    console.log(action);
    yield fork(decrementAsync);
  }
}

export default function* rootSaga() {
  yield fork(watchIncrementAsync);
  yield watchDecrementAsync();
  // 下面的写法与上面的写法上等效
  // yield takeEvery('INCREMENT_ASYNC', incrementAsync);
  // yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}

function* test() {
  console.log(177);
  yield delay(30000);
  console.log(277);
  yield 2;
  console.log(377);
  return 3;
}
(window as any).a = test();
console.log('llll', (window as any).a);
