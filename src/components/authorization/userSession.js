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

export default setSession;
