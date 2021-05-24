import { services } from '../middlewares/index';

function getPackageDetail({ slug = '' }) {
  return services({ url: `/package/${slug}`, method: 'GET' })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}

function getItinerariesByPackage({ id = 1 }) {
  return services({ url: `/itineraries/${id}`, method: 'GET' })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}

function saveContactUs({ data }) {
  return services({ url: `/contact_us/`, method: 'POST', data })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}

function saveNewsletter({ data }) {
  return services({ url: `/newsletter/`, method: 'POST', data })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}

export { getPackageDetail, getItinerariesByPackage, saveContactUs, saveNewsletter };
