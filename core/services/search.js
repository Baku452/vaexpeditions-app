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

function packagesDestination({ queryParams = '', offset = 0, destination }) {
  return services({
    url: `/packages/destination/${destination}/?limit=9&offset=${offset}&${queryParams}`,
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
  return services({ url: `/packages/types/`, method: 'GET' })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}

function posts({ queryParams = '', offset = 0 }) {
  return services({
    url: `/blog/?limit=10&offset=${offset}${queryParams}`,
    method: 'GET',
  })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}
function bloggerAPI({ author }) {
  return services({ url: `/blogger/${author}`, method: 'GET' })
    .then(result => {
      return { result };
    })
    .catch(error => {
      return { error: error.response };
    });
}

export {
  packages,
  packagesDestination,
  packagesTypes,
  packagesOptional,
  posts,
  bloggerAPI,
};
