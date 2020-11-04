import React, { useCallback, useEffect, useState } from 'react';

const INITIAL_STATE = {
  loading : true,
  error   : "",
  data    : []
}

const useDataAPI = (apiCall, initialState = INITIAL_STATE) => {
  const [loading, setLoading] = useState(initialState.loading);
  const [error, setError]     = useState(initialState.error);
  const [data, setData]       = useState(initialState.data);

  const resetState = useCallback(() => {
    setLoading(initialState.loading);
    setError(initialState.error);
  }, [initialState]);

  const fetchData = useCallback(async () => {
    resetState();

    try {
      if (!apiCall) {
        setError('Error: No API call passed.');
        setLoading(false);
        throw new Error('No API call passed.');
      }

      const result = await apiCall();
      switch (result.code) {
        case 200:
          setData(result.data);
          break;
        default:
          setError(`Error: Code ${result.code}`);
          break;
      }
    } catch(error) {
      setError(error);
    }

    setLoading(false);
  }, [apiCall]);


  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [{ loading, error, data }, fetchData];
}

export default useDataAPI;