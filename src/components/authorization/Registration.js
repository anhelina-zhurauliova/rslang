import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { createUser } from './loginAction';

export const Registration = () => (
  <div className="container col-sm-4">
    <ul className="nav nav-tabs">
      <li className="mr-auto ml-5 active">
        <button type="button" className="btn btn-link">
          Sign In
        </button>
      </li>
      <li className="ml-auto mr-5">
        <button type="button" className="btn btn-link">
          Log In
        </button>
      </li>
    </ul>
    <div id="signin">
      <p className="mt-3 mb-3">Enter registration data to create personal account.</p>
      <Formik
        initialValues={{
          username: '',
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
          const { email, password } = values;
          const newUser = {
            email,
            password,
          };
          createUser({ newUser });
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
            <Form name="signin" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="control-label">
                  Name:
                </label>
                <div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-envelope" />
                    </span>
                    <input
                      name="username"
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Enter your name"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>
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
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Enter your email"
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
                  Enter password:
                </label>
                <div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-lock" />
                    </span>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      id="pwd"
                      placeholder="Enter password"
                      value={values.password}
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
                  Repeat password:
                </label>
                <div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-lock" />
                    </span>
                    <input
                      name="rpassword"
                      type="password"
                      className="form-control"
                      id="rpwd"
                      placeholder="Repeat password"
                      value={values.rpassword}
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
                  {errors.rpassword && touched.rpassword && (
                    <span className="mt-3 mb-7 text-danger text-center">{errors.rpassword}</span>
                  )}
                </div>
                <div id="signin" className="tab-pane in active">
                  <button
                    type="submit"
                    id="signin"
                    className="btn btn-block"
                    disabled={isSubmitting}
                  >
                    Log In
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

Registration.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object,
  errors: PropTypes.object,
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.bool,
  handleBlur: PropTypes.bool,
  handleSubmit: PropTypes.bool,
};
