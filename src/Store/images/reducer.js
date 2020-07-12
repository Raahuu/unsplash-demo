import findAndUpdate from "../../Helpers/findAndUpdate";

const initialState = {
  fetching: false,
  data: [],
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_IMAGES":
      return { fetching: true, data: [], error: null };
    case "GET_IMAGES_SUCCESS":
      return { fetching: false, data: action.payload, error: null };
    case "GET_IMAGES_FAILURE":
      return { fetching: false, data: [], error: action.error };

    case "EDIT_IMAGE_DATA":
      return {
        fetching: true,
        data: findAndUpdate(action.payload, state.data),
        error: null,
      };

    default:
      return state;
  }
};
export default reducer;