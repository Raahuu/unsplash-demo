import { all } from "redux-saga/effects";

import images from "./images/saga";

export default function* rootSaga() {
  yield all([images()]);
}
