export const validateEmail = email => {
  let errors = '';
  if (!email) {
    errors = '"email" is required';
  } else if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email)) {
    errors = 'email must be a valid email';
  }
  return errors;
};

export const validatePassword = password => {
  let errors = '';
  if (!password) {
    errors = '"password" is required';
  } else if (!/^(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/.test(password)) {
    errors = 'invalid password';
  }
  return errors;
};
