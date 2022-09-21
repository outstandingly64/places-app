import { createContext } from "react";

/**
 * App-Wide Context Object For Our Authentication State.
 * We set up its value in <App.js>
 */
export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
