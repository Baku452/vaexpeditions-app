import { services } from '../middlewares/index';

function packages({ queryParams = '', offset = 0 }) {
  return services({
    url: `/packages/?limit=9&offset=${offset}&${queryParams}`,
    method: 'GET',
  })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}
function packagesOptional({ queryParams = '' }) {
  return services({ url: `/packages/optional/${queryParams}`, method: 'GET' })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}

function packagesTypes() {
  return services({ url: `/packagestype/`, method: 'GET' })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}

function posts({ queryParams = '' }) {
  return services({ url: `/blog/${queryParams}`, method: 'GET' })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}
export { packages, packagesTypes, packagesOptional, posts };
