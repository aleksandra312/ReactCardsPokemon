import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = (baseUrl) => {
  const [response, setResponse] = useState([]);

  const getData = async (restOfUrl = "") => {
    const url =
      typeof restOfUrl === "string" ? `${baseUrl}${restOfUrl}` : baseUrl;
    const res = await axios.get(url);
    setResponse((response) => [...response, { ...res.data, id: uuid() }]);
  };
  return [response, getData];
};

export default useAxios;
