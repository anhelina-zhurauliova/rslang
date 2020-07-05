import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCookies } from 'react-cookie';
import { useAppContext } from '../../libs/contextLib';
import { fetchCreateUser } from './loginAction';

export const Registration = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['authState']);
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();

  const createUser = async values => {
    try {
      await fetchCreateUser(values);
      // userHasAuthenticated(true);
      // history.push("/settings");
    } catch (e) {
      // alert(e.message);
    }
  };

  return (
    <div className="container mt-5 col-8 col-sm-6 col-md-4 col-xl-3 justify-content-center">
      <h2 className="text-center">Регистрация</h2>
      <div id="signin">
        <p className="mt-3 mb-3 text-justify">
          Заполните форму, чтобы создать аккаунт и начать полноценно пользоваться нашим приложением
        </p>
        <Formik
          initialValues={{
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
            createUser(newUser).then(response => setCookies('authState', response));
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
                <div className="form-group has-feedback">
                  <label htmlFor="password" className="control-label">
                    Повторите пароль:
                  </label>
                  <div>
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-lock" />
                      </span>
                      <Field
                        name="rpassword"
                        type="password"
                        className="form-control"
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
                    <button type="submit" className="btn btn-block" disabled={isSubmitting}>
                      Зарегистрироваться
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

Registration.propTypes = {
  isSubmitting: PropTypes.bool,
};
