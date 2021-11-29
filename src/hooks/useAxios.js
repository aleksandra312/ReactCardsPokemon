import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = (url) => {
  const [response, setResponse] = useState([]);

  const getData = async () => {
    const res = await axios.get(url);
    setResponse((response) => [...response, { ...res.data, id: uuid() }]);
  };
  return [response, getData];
};

export default useAxios;
