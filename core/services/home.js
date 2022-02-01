import { services } from '../middlewares/index';

function destinations() {
  return services({ url: `destinations/`, method: 'GET' })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}

function getBanners() {
  return services({ url: `banners/`, method: 'GET' })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}

export { destinations, getBanners };
