import { clientCredentials } from '../client';

const getDistilleries = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/distilleries`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
const deleteDistillery = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/distilleries/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

// eslint-disable-next-line import/prefer-default-export
export { getDistilleries, deleteDistillery };
