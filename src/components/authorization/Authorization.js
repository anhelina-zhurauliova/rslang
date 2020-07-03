/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const Authorization = () => (
  <div className="container col-sm-4">
    <ul className="nav nav-tabs">
      <li className="ml-auto mr-5 active">
        <a data-toggle="tab" href="#login">
          LOG IN
        </a>
      </li>
      <li className="mr-auto ml-5">
        <a data-toggle="tab" href="#signin">
          SIGN IN
        </a>
      </li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane in active" id="login">
        <h6 className="mt-3 mb-3">Enter your registration data to create personal account.</h6>
        <form>
          <div className="form-group">
            <label className="control-label" htmlFor="email">
              Email:
            </label>
            <div>
              <input
                className="form-control"
                id="email"
                type="email"
                placeholder="Enter email"
                required=""
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="pwd">
              Password:
            </label>
            <div>
              <input
                className="form-control"
                id="pwd"
                type="password"
                placeholder="Enter password"
                required=""
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="rpwd">
              Repeat password:
            </label>
            <div>
              <input
                className="form-control"
                id="rpwd"
                type="password"
                placeholder="Enter password"
                required=""
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-1">
              <button className="btn btn-block" id="log" type="submit">
                LOG IN
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="tab-pane" id="signin">
        <h6 className="mt-3 mb-3">Enter registration data to enter your personal account.</h6>
        <form>
          <div className="form-group">
            <label className="control-label" htmlFor="emails">
              Email:
            </label>
            <div>
              <input
                className="form-control"
                id="emails"
                type="email"
                placeholder="Enter email"
                required=""
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="pwds">
              Password:
            </label>
            <div>
              <input
                className="form-control"
                id="pwds"
                type="password"
                placeholder="Enter password"
                required=""
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-1">
              <button className="btn btn-block" id="sign" type="submit">
                SIGN IN
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);
