import { clientCredentials } from '../client';

const getDistilleries = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/distilleries`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export { getDistilleries };
