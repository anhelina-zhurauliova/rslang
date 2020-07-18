import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCookies } from 'react-cookie';
import { useAppContext } from '../../libs/contextLib';
import { onError } from '../../libs/errorLib';
import { fetchCreateUser, fetchSignIn } from './loginAction';
import { LoaderButton } from './LoaderButton';
import './authorization.scss';

export const Registration = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['authState']);
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const createUser = async values => {
    setIsLoading(true);
    try {
      // eslint-disable-next-line no-unused-vars
      const data = await fetchCreateUser(values);
      const { email, password } = values;
      const newValues = {
        email,
        password,
      };
      const responce = await fetchSignIn(newValues);
      const { userId, token, refreshToken, name } = responce;
      const userData = {
        userId,
        token,
        refreshToken,
        name,
        timestamp: new Date(),
      };
      const authState = {
        isLoggedIn: true,
        user: userData,
      };
      setCookies('authState', authState);
      userHasAuthenticated(true);
      history.push('/games');
    } catch (error) {
      onError('User with this e-mail exists');
      setIsLoading(false);
    }
  };

  return (
    <div className="authenticated authorization_container p-4 mt-5 justify-content-center">
      <h3 className="text-center">Регистрация</h3>
      <div id="signin">
        <p className="authenticated__content mt-3 mb-3 text-justify">
          Заполните форму, чтобы создать аккаунт и начать полноценно пользоваться нашим приложением
        </p>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            rpassword: '',
          }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = '"email" is required; ';
            } else if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(values.email)) {
              errors.email = 'email must be a valid email; ';
            }
            if (!values.password) {
              errors.password = '"password" is required; ';
            } else if (
              !/^(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/.test(
                values.password,
              )
            ) {
              errors.password = 'invalid password; ';
            }
            if (!values.rpassword || values.password !== values.rpassword) {
              errors.rpassword = 'passwords mismatch; ';
            }
            return errors;
          }}
          onSubmit={values => {
            const { email, password, name } = values;
            const newUser = {
              email,
              password,
              name,
            };
            createUser(newUser);
          }}
        >
          {props => {
            const { isSubmitting } = props;
            return (
              <Form>
                <div className="form-group has-feedback">
                  <label htmlFor="name" className="authenticated__content control-label">
                    <strong>Имя:</strong>
                  </label>
                  <div>
                    <div className="input-group">
                      <Field
                        name="name"
                        type="text"
                        className="form-control input"
                        placeholder="username"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group has-feedback">
                  <label htmlFor="email" className="authenticated__content control-label">
                    <strong>Email:</strong>
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-envelope" />
                      </span>
                      <Field
                        name="email"
                        type="text"
                        className="form-control input"
                        placeholder="username@gmail.com"
                        autoComplete="off"
                      />
                    </div>
                    <ErrorMessage
                      className="mt-3 mb-7 text-danger text-center"
                      name="email"
                      component="span"
                    />
                  </div>
                </div>
                <div className="form-group has-feedback">
                  <label htmlFor="password" className="authenticated__content control-label">
                    <strong>Пароль:</strong>
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-lock" />
                      </span>
                      <Field
                        name="password"
                        type="password"
                        className="form-control  input"
                        placeholder="********"
                      />
                    </div>
                    <ErrorMessage
                      className="mt-3 mb-7 text-danger text-center"
                      name="password"
                      component="span"
                    />
                  </div>
                </div>
                <div className="form-group has-feedback">
                  <label htmlFor="password" className="authenticated__content control-label">
                    <strong>Повторите пароль:</strong>
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-lock" />
                      </span>
                      <Field
                        name="rpassword"
                        type="password"
                        className="form-control  input"
                        placeholder="********"
                      />
                    </div>
                    <ErrorMessage
                      className="mt-3 mb-7 text-danger text-center"
                      name="rpassword"
                      component="span"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="tab-pane">
                    <LoaderButton
                      type="submit"
                      className="authenticated__btn btn-block p-2 mt-4"
                      isLoading={isLoading}
                      disabled={isSubmitting}
                    >
                      Pегистрация
                    </LoaderButton>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

Registration.propTypes = {
  isSubmitting: PropTypes.bool,
};
