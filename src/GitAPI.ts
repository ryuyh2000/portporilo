import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/", //서버 url주소
});

export const GitAPI = {
  getAllRepo: () => api.get("users/ryuyh2000/repos"),
};
