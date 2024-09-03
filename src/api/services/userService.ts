import apiClient from '../apiClient';
import { endpoints } from '../endpoints';

export const fetchUsers = async () => {
    const response = await apiClient.get(endpoints.users);
    return response.data;
};

export const createUser = async (userData: { name: string; email: string }) => {
    const response = await apiClient.post(endpoints.users, userData);
    return response.data;
};
