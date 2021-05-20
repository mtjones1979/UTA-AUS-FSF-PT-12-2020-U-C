import React, { useReducer, createContext, useContext } from "react";
import action from "./actions"

// Don't forget to import all of your actions!

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {...state, loading: false};
    case "UPDATE_POSTS":
      return {...state, loading: false};
    case "ADD_POST":
      return {...state, loading: false};
    case "REMOVE_POST":
      return {...state, loading: false};
    case "SET_CURRENT_POST":
      return {...state, loading: false};
    case "LOADING":
      return {...state, loading: true};
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, { 
    posts: [],
      currentPost: {
        _id: 0,
        title: "",
       });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
