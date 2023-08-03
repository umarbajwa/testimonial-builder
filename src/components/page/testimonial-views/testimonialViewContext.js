import React, { createContext, useContext, useReducer } from 'react';
import { testimonialViewData } from '../../../data/data';

// Define action types
const UNDO = 'UNDO';
const REDO = 'REDO';
const UPDATE_DATA = 'UPDATE';
const NO_HISTORTY_UPDATE = 'NHUPDATE';

// Reducer function for handling state changes
function testimonialViewAppReducer(state, action) {
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
      case NO_HISTORTY_UPDATE:
        return {
            ...state,
            data: action.data,
            history: [...state.history],
            currentIndex: state.currentIndex,
        };
    default:
      return state;
  }
}

// Create the context
const TestimonialViewContext = createContext();

// Provider component that wraps the entire app
export function TestimonialViewAppProvider({ children }) {
    const initialState = {
      data: [...testimonialViewData],
      history: [ [...testimonialViewData] ],
      currentIndex: 1,
    };

  const [state, dispatch] = useReducer(testimonialViewAppReducer, initialState);

  return <TestimonialViewContext.Provider value={{ state, dispatch }}>{children}</TestimonialViewContext.Provider>;
}

// Hook for consuming the AppContext
export function useTestimonialViewContext() {
  return useContext(TestimonialViewContext);
}