import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { listRequest, listSuccess, listFailure } from "./actions";

const result = handleActions(
  {
    [listRequest]: () => {},
    [listSuccess]: (_state, action) => action.payload,
    [listFailure]: (_state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [listRequest]: () => true,
    [listSuccess]: () => false,
    [listFailure]: () => false
  },
  false
);

export default combineReducers({
  result,
  isLoading
});
