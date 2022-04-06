import { citiesData, services } from '../middlewares/index';

function getPackageDetail({ slug = '' }) {
  return services({ url: `/packages/${slug}`, method: 'GET' })
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

function saveContactUsB2C({ data }) {
  return services({ url: `/contact_b2c/`, method: 'POST', data })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}

function saveContactUsB2B({ data }) {
  return services({ url: `/contact_b2b/`, method: 'POST', data })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}
function saveTailorForm({ data }) {
  return services({ url: '/tailorForm/', method: 'POST', data })
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

function removeNewsletter({ email }) {
  return services({ url: `/newsletter/${email}`, method: 'DELETE' })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}

function getStates({ ciso = 'AF' }) {
  return citiesData({ url: `/${ciso}/states`, method: 'GET', redirect: 'follow' })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}
function getCities({ ciso = 'AF', siso = 'BDS' }) {
  return citiesData({
    url: `/${ciso}/states/${siso}/cities`,
    method: 'GET',
    redirect: 'follow',
  })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}
export {
  getPackageDetail,
  getItinerariesByPackage,
  saveContactUs,
  saveContactUsB2C,
  saveContactUsB2B,
  saveNewsletter,
  saveTailorForm,
  getStates,
  getCities,
  removeNewsletter,
};
