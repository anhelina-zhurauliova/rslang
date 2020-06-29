import { Cookies } from 'react-cookie';

const TOKEN_VALID = 14400;

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
      return rawResponse.statusText;
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
    Cookies.set('authState', JSON.stringify(authState), { secure: true, maxAge: TOKEN_VALID });
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
      return rawResponse.statusText;
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
    if (!rawResponse.ok) {
      return rawResponse.statusText;
    }
    await rawResponse.json();
  } catch (error) {
    return error.message;
  }
  return null;
};

const logoutUser = () => {
  const authState = {
    isLoggedIn: false,
    user: {},
  };
  Cookies.set('authState', JSON.stringify(authState), { secure: true });
};

export { createUser, signIn, getUser, logoutUser };
