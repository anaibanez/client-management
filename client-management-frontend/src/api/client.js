import Api from '../utils/api';

const api = new Api();
const baseUri = '/v1/client';

export const getClients = () => api.get(`${baseUri}`);

export const getClient = (id) => api.get(`${baseUri}/${id}`);

export const updateClient = (body) => api.put(`${baseUri}/${body.id}`, { body });

export const createClient = (body) => api.post(`${baseUri}`, { body });

export const deleteClient = (id) => api.delete(`${baseUri}/${id}`);
