import { AuthReducer } from "./AuthReducer";
import { createContext, useReducer } from "react";

const INITAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITAL_STATE);


export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, INITAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
