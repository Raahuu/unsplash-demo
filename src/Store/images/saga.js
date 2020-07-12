import { takeLatest, call, put } from "redux-saga/effects";

import { getImagesAPI } from "./API";

const formatData = (apiResponse) => {
  const formattedOutput = [];

  apiResponse.forEach((imageDetails) => {
    formattedOutput.push({
      id: imageDetails.id,
      image: imageDetails.urls.full,
      title:
        (imageDetails.sponsorship && imageDetails.sponsorship.tagline) ||
        "Sample Title",
      author:
        (imageDetails.user && imageDetails.user.first_name) || "Author Name",
      description:
        (imageDetails.alt_description && imageDetails.alt_description) ||
        "Sample Description",
    });
  });
  return formattedOutput;
};

function* test(action) {
  try {
    const response = yield call(getImagesAPI);
    yield put({ type: "GET_IMAGES_SUCCESS", payload: formatData(response) });
  } catch (err) {
    throw err;
  }
}

export default function* defaultSaga() {
  yield takeLatest("GET_IMAGES", test);
}
