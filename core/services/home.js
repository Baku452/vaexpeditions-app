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

/* function create(data) {
  return services({ url: 'chapter/create', method: 'POST', data })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
} */

export { destinations, getBanners };
