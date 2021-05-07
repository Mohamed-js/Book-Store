import { useState, useEffect } from 'react';

const useApi = (query = {}) => {
  const [qa, setQa] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://shrouded-eyrie-30928.herokuapp.com/https://diagnoser-api.herokuapp.com/apico/v1/questions/get.json`,
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(query),
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("couldn't fetch");
        }
        return res.json();
      })
      .then((data) => {
        setQa(data);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
    // eslint-disable-next-line
  }, []);

  return { qa, isPending, error };
};

export default useApi;
