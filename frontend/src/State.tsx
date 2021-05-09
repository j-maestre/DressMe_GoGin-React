import React, { useReducer, useEffect } from "react";


let AppContext = React.createContext(null);

const initialState = {
  theme: "dark",
  user: "",
  items: "",
  base_model: "",
  prendas: {
    "camiseta":"",
    "pantalon":"",
    "zapatos":""
  },
  prenda: "",
  path_camiseta: "https://raw.githubusercontent.com/j-maestre/images/main/Images/camiseta_rayas/",
  path_pantalones: "https://raw.githubusercontent.com/j-maestre/images/main/Images/pantalones_base/"

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
      let new_prendas = {...state};

      if(action.value.Type == "Shirt"){
        new_prendas.prendas.camiseta = action.value;
        return { ...state, prendas: new_prendas.prendas };
        
      }else if(action.value.Type == "trausers"){
        new_prendas.prendas.pantalon = action.value;
        return { ...state, prendas: new_prendas.prendas };
      }
      
    }
    case "SET_PRENDA": {
      return { ...state, prenda: action.value };
    }
    case "SET_PATH_CAMISETA": {
      return { ...state, path_camiseta: action.value };
    }
    case "SET_PATH_PANTALONES": {
      return { ...state, path_pantalones: action.value };
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
        prendas: state.prendas,
        prenda: state.prenda,
        base_model: state.base_model,
        path_camiseta: state.path_camiseta,
        path_pantalones: state.path_pantalones
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
