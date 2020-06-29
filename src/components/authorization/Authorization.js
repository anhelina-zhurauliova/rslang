import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signIn } from './loginAction';
import './authorization.scss';

export const Authorization = () => (
  <div className="container col-8 col-sm-6 col-md-4 col-xl-3 justify-content-center">
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
          if (!values.email) {
            errors.email = '"email"';
          } else if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(values.email)) {
            errors.email = 'email must be a valid email';
          }
          if (!values.password) {
            errors.password = '"password" is required';
          } else if (
            !/^(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/.test(
              values.password,
            )
          ) {
            errors.password = 'invalid password';
          }
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

Authorization.propTypes = {
  isSubmitting: PropTypes.bool,
};
