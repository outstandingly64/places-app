import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const useAuth = () => {
      /**
   * Authentication STATE:
   */
  const [token, setToken] = useState(false);
  const [tokenExpireDate, setTokenExpireDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
      setTokenExpireDate(tokenExpirationDate);
    //store token in localstorage
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpireDate(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(()=>{
    if(token && tokenExpireDate){
      const remainingTime = tokenExpireDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    }else{
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpireDate]);

  //empty dependency array = will only run once
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  return { token, login, logout, userId };
};