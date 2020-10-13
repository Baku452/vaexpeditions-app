import axios from 'axios';

const VALENCIA_API = process.env.NEXT_PUBLIC_API;

const services = axios.create({
  baseURL: `${VALENCIA_API}`,
  timeout: 2000,
});

export { services };
