/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form } from 'formik';
import { createUser } from './loginAction';

export const Registration = () => (
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
      <p className="mt-3 mb-3">Enter registration data to create personal account.</p>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'required';
          } else if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(values.email)) {
            errors.email = 'invalid email adress';
          }
          if (!values.password) {
            errors.password = 'required';
          } else if (
            !/^(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/.test(
              values.password,
            )
          ) {
            errors.password = 'invalid password';
          }
          if (!values.rpassword) {
            errors.password = 'required';
          } else if (values.password !== values.rpassword) {
            errors.rpassword = 'password mismatch';
          }
        }}
        onSubmit={({ values }) => {
          createUser({ values });
          // get token signIn({ values });
          // add cookies
        }}
        render={({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form name="signin" onSubmit={handleSubmit}>
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
              // className="form-group has-feedback"
              className={
                errors.password && touched.password
                  ? 'form-group has-feedback has-error'
                  : 'form-group has-feedback'
              }
            >
              <label htmlFor="password" className="control-label">
                Rpassword:
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

            <div className="form-group">
              <div className="mt-3 mb-7 text-danger text-center" />
              {errors.email && touched.email && <p className="input-feedback">{errors.email}</p>}
              {errors.password && touched.password && (
                <p className="field-error">{errors.password}</p>
              )}

              <div id="signin" className="tab-pane in active">
                <button type="submit" id="signin" className="btn btn-block" disabled={isSubmitting}>
                  LOG IN
                </button>
              </div>
            </div>
          </Form>
        )}
      />
    </div>
  </div>
);

export default Registration;
