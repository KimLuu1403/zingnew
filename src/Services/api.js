import axios from "axios";

const url = {
  baseUrl: "https://6286502a96bccbf32d731cd3.mockapi.io",
  ZingNew: "/ZingNew",
  Book: "/Book",
};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json;charset=UFT-8",
    Accept: "application/json",
  },
});

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default api;
