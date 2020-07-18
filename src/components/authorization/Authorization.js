import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCookies } from 'react-cookie';
import { useAppContext } from '../../libs/contextLib';
import { onError } from '../../libs/errorLib';
import { fetchSignIn } from './loginAction';
import { LoaderButton } from './LoaderButton';
import './authorization.scss';

export const Authorization = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['authState']);
  const { userHasAuthenticated } = useAppContext();
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const signIn = async values => {
    setIsLoading(true);
    let responce;
    try {
      responce = await fetchSignIn(values);
      const { userId, token, refreshToken } = responce;
      const userData = {
        userId,
        token,
        refreshToken,
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
      onError('User not found');
      setIsLoading(false);
    }
  };
  return (
    <div className="authenticated authorization__container p-4 mt-5 justify-content-center">
      <h3 className="text-center">Авторизация</h3>
      <div id="signin">
        <p className="authenticated__content mt-3 mb-3 text-justify">
          Для входа в личный кабинет введите регистрационные данные
        </p>
        <Formik
          initialValues={{
            email: '',
            password: '',
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
            // errors.email = validateEmail(values.email);
            // errors.password = validatePassword(values.password);
            return errors;
          }}
          onSubmit={values => {
            signIn(values);
          }}
        >
          {props => {
            const { isSubmitting } = props;
            return (
              <Form>
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
                        className="form-control input"
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
                <div className="form-group">
                  <div className="tab-pane in active">
                    <LoaderButton
                      type="submit"
                      className="authenticated__btn btn-block p-2 mt-4"
                      isLoading={isLoading}
                      disabled={isSubmitting}
                    >
                      Войти
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

Authorization.propTypes = {
  isSubmitting: PropTypes.bool,
};
