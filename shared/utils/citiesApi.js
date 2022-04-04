const fetchCities = async () => {
  const headers = new Headers();
  headers.append('X-CSCAPI-KEY', process.env.CITIES_API);

  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
  };

  const cities = await fetch(
    'https://api.countrystatecity.in/v1/countries',
    requestOptions,
  );

  const citiesJson = await cities.json();
  return citiesJson;
};

export { fetchCities };
