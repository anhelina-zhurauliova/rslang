/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { signIn } from './loginAction';

export const Authorization = () => (
  <div className="container col-sm-4">
    <ul className="nav nav-tabs">
      <li className="mr-auto ml-5 active">
        <button type="button" className="btn btn-link">
          SIGN IN
        </button>
      </li>
      <li className="ml-auto mr-5">
        <button type="button" className="btn btn-link">
          LOG IN
        </button>
      </li>
    </ul>

    <div id="signin">
      <p className="mt-3 mb-3">Enter registration data to enter your personal account.</p>

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
          return errors;
        }}
        onSubmit={({ values }) => {
          signIn({ values });
        }}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <div className="form-group has-feedback">
                <label htmlFor="email" className="control-label">
                  Email:
                </label>
                <div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-envelope" />
                    </span>
                    <input
                      name="email"
                      id="email"
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                      autoComplete="off"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>

              <div
                className={
                  errors.password && touched.password
                    ? 'form-group has-feedback has-error'
                    : 'form-group has-feedback'
                }
              >
                <label htmlFor="password" className="control-label">
                  Password:
                </label>
                <div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-lock" />
                    </span>
                    <input
                      name="password"
                      id="pwd"
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="field-error">
                  {errors.email && touched.email && (
                    <span className="mt-3 mb-7 text-danger text-center">{errors.email}</span>
                  )}
                  {errors.password && touched.password && (
                    <span className="mt-3 mb-7 text-danger text-center">{errors.password}</span>
                  )}
                </div>
                <div id="signin" className="tab-pane in active">
                  <button
                    type="submit"
                    id="signin"
                    className="btn btn-block"
                    disabled={isSubmitting}
                  >
                    SIGN IN
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
  values: PropTypes.object.isRequired,
  touched: PropTypes.object,
  errors: PropTypes.object,
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.bool,
  handleBlur: PropTypes.bool,
  handleSubmit: PropTypes.bool,
};

export default Authorization;
