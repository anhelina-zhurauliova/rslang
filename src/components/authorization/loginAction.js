import setSession from './userSession';

const errMessage = {
  204: 'The user has been deleted',
  400: 'Bad request',
  401: 'Access token is missing or invalid',
  403: 'Incorrect e-mail or password',
  404: 'User not found',
  417: 'User with this e-mail exists',
  422: 'Incorrect e-mail or password',
};
const TOKEN_VALID = 14000;

const signIn = async user => {
  try {
    const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!rawResponse.ok) {
      return errMessage[rawResponse.status];
    }
    const { userId, token } = await rawResponse.json();
    const userData = {
      userId,
      token,
      timestamp: new Date().toString(),
    };
    const authState = {
      isLoggedIn: true,
      user: userData,
    };
    setSession('authState', JSON.stringify(authState), { secure: true, expires: TOKEN_VALID });
  } catch (error) {
    return error.message;
  }
  return null;
};

const createUser = async user => {
  try {
    const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!rawResponse.ok) {
      return errMessage[rawResponse.status];
    }
    const content = await rawResponse.json();
    if (typeof content !== 'string') signIn(user);
  } catch (error) {
    return error.message;
  }
  return null;
};

const getUser = async (token, userId) => {
  try {
    const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    if (rawResponse.ok) {
      return errMessage[rawResponse.status];
    }
    await rawResponse.json();
  } catch (error) {
    return error.message;
  }
  return null;
};

export { createUser, signIn, getUser };
