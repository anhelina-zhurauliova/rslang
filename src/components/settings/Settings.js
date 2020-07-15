/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import './settings.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCookies } from 'react-cookie';
import { CONSTANTS } from '../../shared/constants';

export const Settings = () => {
  const [settings, setSettings] = useState(null);
  const [cookies] = useCookies(['authState']);
  const defaultQuery = 'settings';

  const token = cookies.authStateauthState.user.userId;
  const userId = cookies.authStateauthState.user.token;
  const settingsUrl = `${CONSTANTS.URL.API}/${userId}/${defaultQuery}`;

  useEffect(() => {
    fetch(settingsUrl, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: JSON.stringify({ settings }),
    })
      .then(response => setSettings(response))
      .catch(() => {
        // TODO: Show some notification
        // console.log(error);
      });
  });

  if (!settings) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={settings}
        validate={values => {
          const errors = {};
          if (!values.wordsLimit) {
            errors.wordsLimit = 'Required';
          }
          if (!values.cardsLimit) {
            errors.cardsLimit = 'Required';
          }
          if (values.wordsLimit < 10 || values.wordsLimit > 200) {
            errors.wordsLimit = 'Invalid words limit';
          }
          if (values.cardsLimit < 10 || values.cardsLimit > 200) {
            errors.cardsLimit = 'Invalid cards limit';
          }
          if (values.wordsLimit > values.cardsLimit) {
            errors.cardsLimit = 'Cards limit should be more than words limit';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);

          fetch(settingsUrl, {
            method: 'PUT',
            headers: {
              Authorization: `${token}`,
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .catch(() => {
              // TODO: Handle errors with some notifications or toasters
              //   console.error('Error:', error);
            })
            .finally(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting }) => (
          <div className="container">
            <Form>
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text "> Ваше имя</span>
                </div>
                <Field className="form-control has-error" type="text" name="userName" />
              </div>
              <ErrorMessage className="is-invalid" name="nameValid" component="div" />
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text ">Лимит слов в день</span>
                </div>
                <Field className="form-control has-error" type="number" name="wordsLimit" />
              </div>
              <ErrorMessage className="is-invalid" name="wordsLimit" component="div" />
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Лимит карточек в день</span>
                </div>
                <Field className="form-control has-error" type="number" name="cardsLimit" />
              </div>
              <ErrorMessage className="is-invalid" name="cardsLimit" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="translate" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Перевод
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="translate" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="transcription" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Транскрипция
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="transcription" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="image" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Картинка
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="image" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="sentenceUnderstanding" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Значение слова
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="sentenceUnderstanding" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="sentenceExample" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Пример использования слова
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="sentenceExample" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="deleteWords" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Удалить
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="deleteWords" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="difficultWords" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Сложные слова
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="difficultWords" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="complexity" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Составные слова
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="complexity" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Сохранить настройки
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
