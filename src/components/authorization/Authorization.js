import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCookies } from 'react-cookie';
import { useAppContext } from '../../libs/contextLib';
// import { onError } from '../../libs/errorLib';
import { signIn } from './loginAction';
import { validateEmail, validatePassword } from './helpers';
import './authorization.scss';

export const Authorization = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['authState']);
  const { userHasAuthenticated } = useAppContext();

  const history = useHistory();

  return (
    <div className="container mt-5 col-8 col-sm-6 col-md-4 col-xl-3 justify-content-center">
      <h2 className="text-center">Авторизация</h2>
      <div id="signin">
        <p className="mt-3 mb-3 text-justify">
          Для входа в личный кабинет введите регистрационные данные
        </p>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validate={values => {
            const errors = {};
            errors.email = validateEmail(values.email);
            errors.password = validatePassword(values.password);
            return errors;
          }}
          onSubmit={values => {
            signIn(values).then(response => setCookies('authState', response));
            // console.log('onSub->', cookies.authState);
            userHasAuthenticated(true);
            history.push('/settings');
          }}
        >
          {props => {
            const { isSubmitting } = props;
            return (
              <Form>
                <div className="form-group has-feedback">
                  <label htmlFor="email" className="control-label">
                    Email:
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-envelope" />
                      </span>
                      <Field
                        name="email"
                        type="text"
                        className="form-control"
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
                  <label htmlFor="password" className="control-label">
                    Пароль:
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-lock" />
                      </span>
                      <Field
                        name="password"
                        type="password"
                        className="form-control"
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
                    <button type="submit" className="btn btn-block" disabled={isSubmitting}>
                      Войти
                    </button>
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
