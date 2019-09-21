import { createAction } from "redux-actions";

export const listRequest = createAction("LIST/LIST_REQUEST");
export const listSuccess = createAction("LIST/LIST_SUCCESS");
export const listRequestFailure = createAction("LIST/GET_FAILURE");
