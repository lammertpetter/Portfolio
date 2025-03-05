import axios from 'axios';

const API_URL = 'https://api.example.com/budget'; // Replace with your actual API URL

export const fetchPersonalFinances = async () => {
    try {
        const response = await axios.get(`${API_URL}/personal`);
        return response.data;
    } catch (error) {
        console.error('Error fetching personal finances:', error);
        throw error;
    }
};

export const fetchBusinessFinances = async () => {
    try {
        const response = await axios.get(`${API_URL}/business`);
        return response.data;
    } catch (error) {
        console.error('Error fetching business finances:', error);
        throw error;
    }
};

export const addPersonalFinance = async (financeData) => {
    try {
        const response = await axios.post(`${API_URL}/personal`, financeData);
        return response.data;
    } catch (error) {
        console.error('Error adding personal finance:', error);
        throw error;
    }
};

export const addBusinessFinance = async (financeData) => {
    try {
        const response = await axios.post(`${API_URL}/business`, financeData);
        return response.data;
    } catch (error) {
        console.error('Error adding business finance:', error);
        throw error;
    }
};