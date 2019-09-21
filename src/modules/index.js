import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";
import list, { sagas as ListSaga } from "./List";

export default combineReducers(list);

export function* rootSaga() {
  yield fork(ListSaga);
}
