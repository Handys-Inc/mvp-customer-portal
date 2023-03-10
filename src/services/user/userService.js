import axios from "axios";

// local service
import { getToken, getId } from "../local/localService";

// USER API
const baseURL = `${process.env.REACT_APP_BASE_URL}/api/users`;

const headers = {
  "x-auth-token": getToken(),
  "Content-Type": "application/json",
};


// ENDPOINTS

export const updateEmail = (email) => {
  const data = JSON.stringify({
    email,
  });
  return axios({
    method: "POST",
    url: `${baseURL}/update-email/${getId()}`,
    data: data,
    headers: headers,
  });
};

export const updatePhone = (phoneNumber) => {
  const data = JSON.stringify({
  phoneNumber,
});
  return axios({
    method: "POST",
    url: `${baseURL}/update-number/${getId()}`,
    data: data,
    headers: headers,
  });
};

export const getSingleUser = () => {
  console.log("using id to update", getId())
  return axios({
    method: "GET",
    url: `${baseURL}/user/${getId()}`,
    headers: headers,
  });
};
