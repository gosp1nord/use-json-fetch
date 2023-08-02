import { useState, useEffect} from 'react';


export default function useJsonFetch(url, opts) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
      setLoading(true);
      setError(false);
      fetch(url, opts)
        .then((result) => {
            let answer;
            if (result.status === 200) {
            answer = result.json();
            }
            return answer
        })
        
        .then((data) => {
          if (data) {
            setData({data: data.status})
          } else {
            setError(true)
          }
          setLoading(false)
        })

    }, [url]);
    return [{data, loading, error}];
  }
