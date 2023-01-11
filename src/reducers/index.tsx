import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./counter";

// reducer는 표현문으로!
const rootReducer = combineReducers({
  todos,
  counter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
