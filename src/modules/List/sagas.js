import { takeLatest, put, call, fork } from "redux-saga/effects";
import { listRequest, listSuccess, listFailure } from "./actions";
import { getList } from "./api";

export function* fetchListForm(action) {
  const queries = action.payload;
  try {
    const response = yield call(getList, queries);
    yield put(listSuccess(response));
  } catch (error) {
    yield put(listFailure(error));
  }
}

function* fetchListWatcher() {
  yield takeLatest(listRequest, fetchListForm);
}

export default function*() {
  yield fork(fetchListWatcher);
}
