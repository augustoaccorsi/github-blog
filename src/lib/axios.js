import axios from 'axios';

const GITHUB_API = 'https://api.github.com/users/augustoaccorsi';

export const API = axios.create({
    baseURL: GITHUB_API,
});
