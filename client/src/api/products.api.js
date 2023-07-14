import axios from 'axios';

const productsApi = axios.create({
    baseUrl: 'http://localhost:8000/products/api/v1/products'
});

export const getAllProducts = () => productsApi.get('/');

export const getProduct = (id) => productsApi.get(`/${id}/`);

export const createProduct = (product) => productsApi.post('/', product);

export const deleteProduct = (id) => productsApi.delete(`/${id}/`);

export const updateProduct = (id, product) => productsApi.put(`/${id}/`, product);