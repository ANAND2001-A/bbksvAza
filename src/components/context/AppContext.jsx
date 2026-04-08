import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

// Initial state
const initialState = {
  formData: {
    fullName: '',
    contactNumber: '',
    email: '',
    country: 'India',
    state: '',
    district: '',
    villageName: '',
    pincode: '',
    productInterest: '',
    businessType: '',
    gstAvailable: 'No',
    gstNumber: '',
    taxId: '',
    message: ''
  },
  formErrors: {},
  isSubmitting: false,
  submitSuccess: false
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value
        }
      };
    
    case 'UPDATE_COUNTRY':
      return {
        ...state,
        formData: {
          ...state.formData,
          country: action.value,
          state: '',
          district: ''
        }
      };
    
    case 'UPDATE_STATE':
      return {
        ...state,
        formData: {
          ...state.formData,
          state: action.value,
          district: ''
        }
      };
    
    case 'SET_FORM_ERRORS':
      return {
        ...state,
        formErrors: action.errors
      };
    
    case 'SET_SUBMITTING':
      return {
        ...state,
        isSubmitting: action.value
      };
    
    case 'SET_SUBMIT_SUCCESS':
      return {
        ...state,
        submitSuccess: action.value
      };
    
    case 'RESET_FORM':
      return {
        ...initialState,
        formData: {
          ...initialState.formData,
          country: state.formData.country
        }
      };
    
    default:
      return state;
  }
};

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    state,
    dispatch,
    // Helper functions
    updateFormField: (field, value) => {
      dispatch({ type: 'UPDATE_FORM_FIELD', field, value });
    },
    updateCountry: (value) => {
      dispatch({ type: 'UPDATE_COUNTRY', value });
    },
    updateState: (value) => {
      dispatch({ type: 'UPDATE_STATE', value });
    },
    setFormErrors: (errors) => {
      dispatch({ type: 'SET_FORM_ERRORS', errors });
    },
    setSubmitting: (value) => {
      dispatch({ type: 'SET_SUBMITTING', value });
    },
    setSubmitSuccess: (value) => {
      dispatch({ type: 'SET_SUBMIT_SUCCESS', value });
    },
    resetForm: () => {
      dispatch({ type: 'RESET_FORM' });
    }
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
