import showError from './showError';

const errMessage = {
  204: 'The user has been deleted',
  400: 'Bad request',
  401: 'Access token is missing or invalid',
  403: 'Incorrect e-mail or password',
  404: 'User not found',
  417: 'User with this e-mail exists',
  422: 'Incorrect e-mail or password',
};

const createUser = async (user) => {
  let content;
  try {
    const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (rawResponse.status > 200) {
      showError(errMessage[rawResponse.status]);
    } else {
      content = await rawResponse.json();
      return content;
    }
  } catch (error) {
    showError(error.message);
  }
  return content;
};

const signIn = async (user) => {
  let content;
  try {
    const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (rawResponse.status > 200) {
      showError(errMessage[rawResponse.status]);
    } else {
      content = await rawResponse.json();
      return content;
    }
  } catch (error) {
    showError(error.message);
  }
  return content;
};

const getUser = async (token, userId) => {
  let content;
  try {
    const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    if (rawResponse.status > 200) {
      showError(errMessage[rawResponse.status]);
    } else {
      content = await rawResponse.json();
      return content;
    }
  } catch (error) {
    showError(error.message);
  }
  return content;
};

export { createUser, signIn, getUser };
