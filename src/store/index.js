import {combineReducers} from "redux";
import auth from "../redux/auth/authSlice.js";
import posts from "../redux/postSlice.js";

const rootReducer = combineReducers({
    auth,
    posts,
    devTools: true,
});
export default rootReducer;