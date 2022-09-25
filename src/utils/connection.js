import axios from 'axios';
import { useEffect, useState } from 'react';

const useConnection = (url, method = 'GET', dataToApi = {}) => {
  const [dataState, setDataState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const connectByMethod = async () => {
      if (method === 'GET') {
        return await axios.get(url, { withCredentials: true });
      }
      if (method === 'PUT') {
        return await axios.put(url, dataToApi, { withCredentials: true });
      }
      if (method === 'POST') {
        return await axios.post(url, dataToApi, { withCredentials: true });
      }
      if (method === 'DELETE') {
        return await axios.delete(url, { withCredentials: true });
      }
    };

    const response = async () => {
      setLoading(true);
      try {
        const { data } = await connectByMethod();
        setDataState(data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    response();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url]);

  return { dataState, loading, error };
};

export default useConnection;
