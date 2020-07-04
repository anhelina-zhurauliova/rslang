import { CONSTANTS } from '../../shared/constants';

const signIn = async user => {
  try {
    const rawResponse = await fetch(`${CONSTANTS.URL.API}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!rawResponse.ok) {
      rawResponse.text().then(text => {
        throw Error(text);
      });
    }
    const { userId, token } = await rawResponse.json();
    const userData = {
      userId,
      token,
      timestamp: new Date(),
    };
    const authState = {
      isLoggedIn: true,
      user: userData,
    };
    return authState;
  } catch (error) {
    throw Error(error.message);
  }
};

const createUser = async user => {
  try {
    const rawResponse = await fetch(`${CONSTANTS.URL.API}/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!rawResponse.ok) {
      return rawResponse.statusText;
    }
    const content = await rawResponse.json();
    let authState;
    if (typeof content !== 'string') {
      authState = signIn(user);
    }
    return authState;
  } catch (error) {
    return error.message;
  }
};

const getUser = async (token, userId) => {
  try {
    const rawResponse = await fetch(`${CONSTANTS.URL.API}/users/${userId}`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    if (!rawResponse.ok) {
      return rawResponse.statusText;
    }
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error.message;
  }
};

const logoutUser = () => {
  const authState = {
    isLoggedIn: false,
    user: {},
  };
  return authState;
};

export { createUser, signIn, getUser, logoutUser };
