enum ActionType {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  EDIT_TODO = "EDIT_TODO",
}

interface Action {
  type: ActionType;
  text: string;
}

const todos = (state = [], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return;
    case "DELETE_TODO":
      return;
    default:
      return state;
  }
};

export default todos;
