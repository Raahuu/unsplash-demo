import findAndUpdate from "../../Helpers/findAndUpdate";
import findAndDelete from "../../Helpers/findAndDelete";

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
        ...state,
        data: findAndUpdate(action.payload, state.data),
      };

    case "DELETE":
      return {
        ...state,
        data: findAndDelete(action.payload, state.data),
      };

    default:
      return state;
  }
};
export default reducer;
