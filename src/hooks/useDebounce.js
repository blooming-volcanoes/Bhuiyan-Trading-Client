import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debounceData, setDebounceData] = useState(null);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setDebounceData(value);
    }, delay);

    return () => {
      clearInterval(timeOut);
    };
  }, [value, delay]);

  return debounceData;
}

export default useDebounce;
