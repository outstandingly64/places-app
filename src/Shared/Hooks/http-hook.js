import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // if the component changes during an outgoing request,
  // it must be aborted, thus they must first be tracked in an array
  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        // signal links the abortCtrl to the outgoing request,
        // which can then be used to cancel the connecting request
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal
        });

        const responseData = await response.json();

        // throw an error if we have a 400 or 500 level response code
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        return responseData;
      } catch (err) {
        setError(err.message);
      }

      setIsLoading(false);
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  /**
   * Returning a function in the first function.
   * The returned function now executes as a 'clean up' function
   * before the next time useEffect runs again or when the component that
   * uses useEffect (the component that uses our custom hook) unmounts.
   */
  useEffect(() =>{
    return () => {
        activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
    }
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
