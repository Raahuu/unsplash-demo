import loginUser from "../../Helpers/loginUser";
import signupUser from "../../Helpers/signupUser";

const initialState = {
  users: [
    {
      username: "asdf",
      password: "asdf123",
    },
  ],
  status: undefined,
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, status: loginUser(state.users, action.payload) };
    case "SIGNUP":
      return { ...state, ...signupUser(state.users, action.payload) };
    case "CLEAR":
      return { ...state, status: undefined, error: null };

    default:
      return state;
  }
};
export default reducer;
