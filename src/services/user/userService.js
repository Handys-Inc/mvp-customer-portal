import axios from "axios";

// Current user from Local Storage
const currentUser = JSON.parse(localStorage.getItem("user") || null);

// API
const baseURL = `${process.env.REACT_APP_BASE_URL}/api/users`;

const headers = {
  // "x-auth-token": currentUser.token,
  "Content-Type": "application/json",
};

console.log("current user", currentUser);

export const updateEmail = (email) => {
  const data = JSON.stringify({
    email,
  });
  return axios({
    method: "POST",
    url: `${baseURL}/update-email/`,
    //  url: `${baseURL}/update-email/${_id}`,
    data: data,
    headers: headers,
  });
};

export const getSingleUser = (email) => {
  return axios({
    method: "POST",
    url: `${baseURL}/users/user`,
    // url: `${baseURL}/users/user/${currentUser._id}`,

    headers: headers,
  });
};
