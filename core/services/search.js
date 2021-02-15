import { services } from '../middlewares/index';

function packages({ queryParams = '' }) {
  return services({ url: `/packages/${queryParams}`, method: 'GET' })
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

export { packages, packagesTypes, packagesOptional };
