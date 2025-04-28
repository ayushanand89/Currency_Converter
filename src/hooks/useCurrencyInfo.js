import axios from "axios";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      )
      .then((res) => setData(res.data[currency]))
      .catch((err) => console.error("Error fetching currency data", err));

      //console.log(data); 
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
