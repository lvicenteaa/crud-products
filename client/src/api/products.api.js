import axios from "axios";

const URL = "http://localhost:8000";

console.log(URL);
const productsApi = axios.create({
  baseURL: `${URL}/products/api/v1/products`,
});

export const getAllProducts = () => productsApi.get("/");

export const getProduct = (id) => productsApi.get(`/${id}`);

export const createProduct = (task) => productsApi.post("/", task);

export const updateProduct = (id, task) => productsApi.put(`/${id}/`, task);

export const deleteProduct = (id) => productsApi.delete(`/${id}`);