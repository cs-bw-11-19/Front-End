import axios from "axios";

export default () => {
  const Token = localStorage.getItem("key");

  return axios.create({ 
      "Content-Type": "application/json",
      Authorization: `Token ${Token}`
  });
};