export enum ActionType {
  FEATCH_POSTS = "FETCH_POSTS",
  DELETE_POSTS = "DELETE_POSTS",
}

interface Post {
  userId: number;
  id: number;
  title: string;
}

interface Action {
  type: ActionType;
  payload: Post[];
}

export const posts = (state = [], action: Action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...state, action.payload];
    default:
      return state;
  }
};
