import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useAppContext } from '../../libs/contextLib';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const GameSettings = () => {
  const currentLevel = 3;
  const currentPage = 13;
  const { puzzle, setPuzzle } = useAppContext();

  return (
    <div
      className={
        !puzzle.isSettings
          ? 'settings__content col-12 col-sm-12 col-md-12 p-4 d-none'
          : 'settings__content col-12 col-sm-12 col-md-12 p-4'
      }
    >
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            newGame: false,
            userWords: true,
            hints: ['isTranslation', 'isAutoListening', 'isPronounce'],
            games: { isLevel: currentLevel, isPpage: currentPage },
          }}
          onSubmit={async values => {
            await sleep(1000);
            setPuzzle({ isSettings: !puzzle.isSettings });
            // eslint-disable-next-line no-unused-expressions
            values.newGame
              ? (values.games = { isLevel: 1, isPpage: 1 })
              : (values.games = { isLevel: currentLevel, isPpage: currentPage });
            // console.log(JSON.stringify(values, null, 2));
            setPuzzle({ settingsPuzzle: JSON.stringify(values, null, 2) });
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <div className="label text-justify">
                Необходимо собрать слова в правильном порядке, чтобы получилось предложение на
                английском языке. Слова можно не только перетягивать, но и последовательно кликать
                мышкой.
              </div>
              <div className="label text-left pt-2">
                <strong>Выберите подсказки:</strong>
              </div>
              <div className="justify-content-between">
                <div className="d-inline">
                  <label htmlFor="hints">
                    <Field type="checkbox" name="hints" value="isAutoListening" />
                    <span className="p-2">Автопроизношение</span>
                  </label>
                </div>
                <div className="justify-content-center d-inline">
                  <label htmlFor="hints">
                    <Field type="checkbox" name="hints" value="isTranslation" />
                    <span className="p-2">Перевод</span>
                  </label>
                </div>
                <div className="justify-content-center d-inline">
                  <label htmlFor="hints">
                    <Field type="checkbox" name="hints" value="isPronounce" />
                    <span className="p-2">Произношение</span>
                  </label>
                </div>
                <div className="justify-content-center d-inline">
                  <label htmlFor="hints">
                    <Field type="checkbox" name="hints" value="isBacground" />
                    <span className="p-2">Показать фон</span>
                  </label>
                </div>
              </div>

              <div className="label text-left pt-2">
                <strong>Выберите опции:</strong>
              </div>
              <div className="justify-content-center d-inline">
                <label htmlFor="newGame">
                  <Field type="radio" value="false" name="newGame" />
                  <span className="p-2">Продолжить игру</span>
                </label>
                <label htmlFor="newGame">
                  <Field type="radio" value="true" name="newGame" />
                  <span className="p-2">Новая игра</span>
                </label>
                {values.newGame ? (
                  <div>
                    <label htmlFor="userWords">
                      <Field type="radio" value="true" name="userWords" />
                      <span className="p-2">Изученные слова</span>
                    </label>
                    <label htmlFor="userWords">
                      <Field type="radio" value="false" name="userWords" />
                      <span className="p-2">Разные слова</span>
                    </label>
                  </div>
                ) : null}
              </div>
              <div>
                <button
                  className="btn-game btn btn-secondary mx-auto"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Назад
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
