const setSession = (name, value, options) => {
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  Object.keys(options).map(optionKey => {
    updatedCookie += `; ${optionKey}`;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`;
    }
    return updatedCookie;
  });
  document.cookie = updatedCookie;
};

const getSession = cname => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

const checkSession = () => {
  const { isLoggedIn } = getSession('authUser');
  if (isLoggedIn && isLoggedIn != null) {
    // Logged in //do nothing
  } else {
    window.location.href = '';
  }
};

const logoutUser = () => {
  const authState = {
    isLoggedIn: false,
    user: {},
  };
  setSession('authState', JSON.stringify(authState), { secure: true, expires: 0 });
};

export { setSession, getSession, checkSession, logoutUser };
