    import React, { createContext, useContext, useReducer } from "react";

// Create the context
export const StateContext = createContext();

// Build the StateProvider component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom hook to access the StateContext
export const useStateValue = () => useContext(StateContext);
