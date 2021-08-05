import axios from "axios";

const baseUrl = "http://localhost:3000/persons";

const getAllNames = () => {
  const request = axios.get(`${baseUrl}`);
  return request.then((response) => response.data);
};

const createName = (nameObject) => {
  const request = axios.post(baseUrl, nameObject);
  return request.then((response) => response.data);
};

const deleteName = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request;
};

const updateName = (id, newNum) => {
  const request = axios.put(`${baseUrl}/${id}`, newNum);
  return request.then((response) => response.data);
};

export default { getAllNames, createName, deleteName, updateName };
