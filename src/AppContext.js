import React, { createContext, useContext, useReducer } from 'react';
import { data } from './data/data';

// Define action types
const UNDO = 'UNDO';
const REDO = 'REDO';
const UPDATE_DATA = 'UPDATE';

// Reducer function for handling state changes
function appReducer(state, action) {
  switch (action.type) {
    case UNDO:
        
        return { 
            ...state,
            data:state.history[state.currentIndex - 1],
            currentIndex: state.currentIndex - 1 
        };
    case REDO:
        return { 
            ...state,
            data:state.history[state.currentIndex + 1],
            currentIndex: state.currentIndex + 1 
        };
    case UPDATE_DATA:
        return {
            ...state,
            data: action.data,
            history: [...state.history.slice(0, state.currentIndex + 1), action.data],
            currentIndex: state.currentIndex + 1,
        };
    default:
      return state;
  }
}

// Create the context
const AppContext = createContext();

// Provider component that wraps the entire app
export function AppProvider({ children }) {
    const initialState = {
        data: [...data],
        history: [ [...data] ],
        currentIndex: 1,
      };

  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

// Hook for consuming the AppContext
export function useAppContext() {
  return useContext(AppContext);
}