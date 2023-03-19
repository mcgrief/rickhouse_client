import { clientCredentials } from '../client';

const getWhiskey = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/whiskey`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleWhiskey = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/whiskey/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createWhiskey = (whiskey) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/whiskey`, {
    method: 'POST',
    body: JSON.stringify(whiskey),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

const getWhiskeyTypes = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/whiskey_types`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const updateWhiskey = (whiskey, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/whiskey/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(whiskey),
  })
    .then((response) => resolve(response.data))
    .catch(reject);
});

const deleteWhiskey = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/whiskey/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getWhiskey, createWhiskey, getSingleWhiskey, getWhiskeyTypes, updateWhiskey, deleteWhiskey,
};
