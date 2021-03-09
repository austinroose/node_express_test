import axios from 'axios';
import { resolve } from './resolve.js';
import URLs from '../routing/URLs';

export async function fetchTodos() {
    return await resolve(axios.get(`${URLs.baseURL}/todo/getTodos`)).then(res => res.data);
} 