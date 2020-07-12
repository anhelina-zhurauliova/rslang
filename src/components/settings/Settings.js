/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CONSTANTS } from '../../shared/constants';

const auth = {
  message: 'Authenticated',
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWJhYjU4OThmZmJmMDAxNzQ1ODFlOSIsImlhdCI6
    MTU5MjkzNjk4MywiZXhwIjoxNTkyOTUxMzgzfQ.130z1Euhr0B0rI4AFdQe3RgtJI46uihVvQnT2OAqqAU`,
  userId: '5eebab5898ffbf00174581e9',
};

const defaultQuery = 'settings';
const settingsUrl = `${CONSTANTS.URL.API}/${auth.userId}/${defaultQuery}`;
// TODO: Take these from cookies

export const Settings = () => {
  const [settings, setSettings] = useState(null);

  // TODO: Get data here
  useEffect(() => {
    fetch(settingsUrl, {
      method: 'GET',
      headers: {
        Authorization: `${auth.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ settings }),
    })
      .then(response => setSettings(response))
      .catch(error =>
        // TODO: Show some notification
        console.log(error),
      );
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
          console.log('values');
          console.log(values);
          setSubmitting(true);

          // TODO: Put data here
          fetch(settingsUrl, {
            method: 'PUT',
            headers: {
              Authorization: `${auth.token}`,
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .catch(error => {
              // TODO: Handle errors with some notifications or toasters
              console.error('Error:', error);
            })
            .finally(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting }) => (
          <div className="container">
            <Form>
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text "> Your name</span>
                </div>
                <Field className="form-control has-error" type="text" name="userName" />
              </div>
              <ErrorMessage className="is-invalid" name="nameValid" component="div" />
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text ">Daily limit of words</span>
                </div>
                <Field className="form-control has-error" type="number" name="wordsLimit" />
              </div>
              <ErrorMessage className="is-invalid" name="wordsLimit" component="div" />
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Daily limit of cards</span>
                </div>
                <Field className="form-control has-error" type="number" name="cardsLimit" />
              </div>
              <ErrorMessage className="is-invalid" name="cardsLimit" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="translate" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Translate
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="translate" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="transcription" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Transcription
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="transcription" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="image" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Image
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="image" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="sentenceUnderstanding" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Sentence for best understanding
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="sentenceUnderstanding" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="sentenceExample" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Sentence example of usage
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="sentenceExample" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="deleteWords" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Delete
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="deleteWords" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="difficultWords" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Difficult Words
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="difficultWords" component="div" />
              <div className="form-group form-check">
                <Field className="form-check-input" type="checkbox" name="complexity" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Complexity
                </label>
              </div>
              <ErrorMessage className="is-invalid" name="complexity" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Save
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
