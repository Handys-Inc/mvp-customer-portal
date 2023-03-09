import axios from "axios";

// Current user from Local Storage
const currentUser = JSON.parse(localStorage.getItem("user") || null);

const { id, token } = currentUser;

// API
const baseURL = `${process.env.REACT_APP_BASE_URL}/api/users`;

const headers = { "x-auth-token": token, "Content-Type": "application/json" };

export const updateEmail = (email) => {
  const data = JSON.stringify({
    email,
  });
  return axios({
    method: "POST",
    url: `${baseURL}/update-email/${id}`,
    data: data,
    headers: headers,
  });
};
