import { CONSTANTS } from '../../shared/constants';

const fetchSignIn = async user => {
  const rawResponse = await fetch(`${CONSTANTS.URL.API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await rawResponse.json();
  return content;
};

const fetchCreateUser = async user => {
  const rawResponse = await fetch(`${CONSTANTS.URL.API}/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await rawResponse.json();
  return content;
};

const fetchGetUser = async (token, userId) => {
  const rawResponse = await fetch(`${CONSTANTS.URL.API}/users/${userId}`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
  const content = await rawResponse.json();
  return content;
};

const logoutUser = () => {
  const authState = {
    isLoggedIn: false,
    user: {},
  };
  return authState;
};

export { fetchCreateUser, fetchSignIn, fetchGetUser, logoutUser };
