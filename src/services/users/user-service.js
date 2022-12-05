import axios from "axios";
const API_BASE = "http://localhost:4000/api";
const USER_API_URL = 'http://localhost:4000/api/users'
const api = axios.create({withCredentials: true});

export const userLogin = async (user) => {
    const response = await api.post(`${API_BASE}/login`, user);
    return response.data;
}

export const userLogout = async () => {
    await api.post(`${API_BASE}/logout`);
}

export const userProfile = async () => {
    const response = await api.post(`${API_BASE}/profile`);
    return response.data
}
export const userRegister = async (user) => {
    const response = await api.post(`${API_BASE}/register`, user);
    return response.data
}
export const getAllUsers = async () => {
    const response = await axios.get(`${API_BASE}`)
    return response.data
}
export const getAllFanUsers = async () => {
    const response = await axios.get(`${API_BASE}/fans`)
    return response.data
}
export const getAllAuthorUsers = async () => {
    const response = await axios.get(`${API_BASE}/forum_authors`)
    return response.data
}
export const getAllAdminUsers = async () => {
    const response = await axios.get(`${API_BASE}/admins`)
    return response.data
}

export const getUserById = async (UserId) => {
    const response = await axios.delete(`${USER_API_URL}/${UserId}`)
    return response.data
}
export const deleteUserById = async (UserId) => {
    const response = await axios.delete(`${USER_API_URL}/${UserId}`)
    return response.data
}