import { useEffect, useState } from "react";
import fetchDataFromApi from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        console.log("res");
        console.log(res);
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Plot twist! We've encountered a glitch in the matrix.");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
