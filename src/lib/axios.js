import axios from 'axios';

const GITHUB_API = 'https://api.github.com';

export const API = axios.create({
    baseURL: GITHUB_API,
});
