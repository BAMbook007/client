import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import fileReduser from "./fileReduser";
import userReduser from "./userReducer";

const rootReducers = combineReducers({
  user: userReduser,
  files: fileReduser
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))