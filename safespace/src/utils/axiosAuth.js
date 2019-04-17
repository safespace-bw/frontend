import axios from "axios";

export default () => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      id: id
    }
  });
};
