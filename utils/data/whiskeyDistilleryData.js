import { clientCredentials } from '../client';

const createWhiskeyDistillery = (whiskeyId, distilleryId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/whiskeydistillery`, {
    method: 'POST',
    body: JSON.stringify({
      whiskey_id: whiskeyId,
      distillery_id: distilleryId,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export default createWhiskeyDistillery;
