/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const auth = {
  message: 'Authenticated',
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWJhYjU4OThmZmJmMDAxNzQ1ODFlOSIsImlhdCI6
  MTU5MjkzNjk4MywiZXhwIjoxNTkyOTUxMzgzfQ.130z1Euhr0B0rI4AFdQe3RgtJI46uihVvQnT2OAqqAU`,
  userId: '5eebab5898ffbf00174581e9',
};

const urlSettings = `https://afternoon-falls-25894.herokuapp.com/users/${auth.userId}/settings`;
export class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limitWords: '',
      limitCards: '',
      translate: '',
      transcription: '',
      image: '',
      sentenceUnderstanding: '',
      sentenceExample: '',
      deleteWords: '',
      difficultWords: '',
      complexity: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickSettings = this.handleClickSettings.bind(this);
    this.handleClickSaveSettings = this.handleClickSaveSettings.bind(this);
  }

  handleChange = event => {
    this.destruction();
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };

  async handleClickSettings(event) {
    const { limitWords, ...settings } = this.state;
    JSON.stringify(settings);
    await fetch(urlSettings, {
      method: 'GET',
      headers: {
        Authorization: `${auth.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        limitWords,
        settings,
      }),
    }).then(response => response.json());
    // .catch(error => {
    //   console.error('Error:', error);
    // });
    event.preventDefault();
  }

  async handleClickSaveSettings(event) {
    await fetch(this.urlSettings, {
      method: 'PUT',
      headers: {
        Authorization: `${auth.token}`,
        'Content-Type': 'application/json',
      },
    }).then(response => response.json());
    // .catch(error => {
    //   console.error('Error:', error);
    // });
    event.preventDefault();
  }

  isValid() {
    const { limitWords, limitCards } = this.state;
    if (limitWords < 10 || limitWords > 200) {
      return false;
    }
    if (limitCards < 10 || limitCards > 500) {
      return false;
    }
    if (limitWords > limitCards) {
      return false;
    }
    return true;
  }

  render() {
    const {
      limitWords,
      limitCards,
      translate,
      transcription,
      image,
      sentenceUnderstanding,
      sentenceExample,
      deleteWords,
      difficultWords,
      complexity,
    } = this.state;
    return (
      <div className="container">
        <button className="btn btn-secondary" type="button" onClick={this.handleClickSettings}>
          Settings
        </button>
        <button
          disabled={this.isValid()}
          className="btn btn-secondary"
          type="button"
          onClick={this.handleClickSaveSettings}
          errorMessage={this.isValid() ? '' : 'This field is required'}
        >
          Save Settings
        </button>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text ">Daily limit of words</span>
          </div>
          <input
            className="form-control has-error"
            type="number"
            min="10"
            max="100"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            onChange={this.handleChange}
            value={limitWords}
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Daily limit of cards</span>
          </div>
          <input
            className="form-control has-error"
            type="number"
            min="10"
            max="100"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            onChange={this.handleChange}
            value={limitCards}
          />
        </div>
        <div className="form-group form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={translate}
            onChange={this.handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Translate
          </label>
        </div>
        <div className="form-group form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={transcription}
            onChange={this.handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Transcription
          </label>
        </div>
        <div className="form-group form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={image}
            onChange={this.handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Image
          </label>
        </div>
        <div className="form-group form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={sentenceUnderstanding}
            onChange={this.handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Sentence for best understanding
          </label>
        </div>
        <div className="form-group form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={sentenceExample}
            onChange={this.handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Sentence example of usage
          </label>
        </div>
        <div className="form-group form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={deleteWords}
            onChange={this.handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Delete
          </label>
        </div>
        <div className="form-group form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={difficultWords}
            onChange={this.handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Difficult Words
          </label>
        </div>
        <div className="form-group form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={complexity}
            onChange={this.handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Complexity
          </label>
        </div>
      </div>
    );
  }
}
