/**
 * This is a simple redux-like state management pattern for React using hooks
 * that might be useful in your simpler Ionic React apps that don't
 * require something as complex as Redux.
 *
 * See each page for an example of how to read from state and
 * dispatch actions.
 *
 * Learn more:
 * https://ionicframework.com/blog/a-state-management-pattern-for-ionic-react-with-react-hooks/
 */

import React, { useReducer, useEffect } from "react";


let AppContext = React.createContext(null);

const initialState = {
  theme: "dark",
  user: "",
  items: "",
  base_model: "hola",
  prendas: [],
  prenda: ""

};

let reducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE": {
      return { ...state, ...action.value };
    }
    case "SET_USER": {
      return { ...state, user: action.value };
    }
    case "SET_PRENDAS": {
      return { ...state, prendas: action.value };
    }
    case "LOGOUT": {
      return { ...state, user: "" };
    }
    case "SET_ITEMS": {
      return { ...state, items: action.value };
    }
    case "SET_BASE": {
      return { ...state, base_model: action.value };
    }
    case "SET_PRENDA": {
      return { ...state, prenda: action.value };
    }
  }
  return state;
};

const logger = (reducer) => {
  const reducerWithLogger = (state, action) => {
    console.log(
      "%cPrevious State:",
      "color: #9E9E9E; font-weight: 700;",
      state
    );
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    const actionReducer = reducer(state, action);
    console.log(
      "%cNext State:",
      "color: #47B04B; font-weight: 700;",
      actionReducer
    );
    return actionReducer;
  };
  return reducerWithLogger;
};

const loggerReducer = logger(reducer);

function AppContextProvider(props) {
  const fullInitialState = {
    ...initialState,
  };

  let [state, dispatch] = useReducer(loggerReducer, fullInitialState);
  // SAVE IN LOCALSTORAGE THE LOGGED USER
  useEffect(() => {
    window.localStorage.setItem(
      "persistedState",
      JSON.stringify({
        user: state.user,
        theme: state.theme,
        prenda: state.prenda
      })
    );
  }, [state]);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };

export const isLogin = (state) => {
  return state.user ? true : false;
};
