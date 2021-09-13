import axios from 'axios';

const VALENCIA_API = process.env.NEXT_PUBLIC_API;

const services = axios.create({
  baseURL: `${VALENCIA_API}`,
  // timeout: 2000,
});

const citiesData = axios.create({
  baseURL: 'https://api.countrystatecity.in/v1/countries',
  headers: { 'X-CSCAPI-KEY': `aXpIVG5iUDdTTTVubVoyelZiMHgxU2MxcDk0clZ0amdLQUh2dE4wMw==` },
});
export { services, citiesData };
