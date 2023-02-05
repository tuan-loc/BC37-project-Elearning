import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userListReducer from "features/Admin/Users/redux/adminSlice";
import userReducer from "features/User/redux/userSlice";
import courseListReducer from "features/Admin/Courses/redux/courseSlice";
import homeReducer from "features/Home/Home/redux/homeSlice";

const reducer = combineReducers({
  userListReducer: userListReducer,
  userReducer: userReducer,
  courseListReducer: courseListReducer,
  homeReducer: homeReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
