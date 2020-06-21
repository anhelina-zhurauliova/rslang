import React from 'react';

export const Authorization = () => (
  <div class="container col-sm-4">
    <ul class="nav nav-tabs">
      <li class="ml-auto mr-5 active">
        <a data-toggle="tab" href="#login">
          LOG IN
        </a>
      </li>
      <li class="mr-auto ml-5">
        <a data-toggle="tab" href="#signin">
          SIGN IN
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane in active" id="login">
        <h6 class="mt-3 mb-3">Enter your registration data to create personal account.</h6>
        <form>
          <div class="form-group">
            <label class="control-label" for="email">
              Email:
            </label>
            <div>
              <input
                class="form-control"
                id="email"
                type="email"
                placeholder="Enter email"
                required=""
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label" for="pwd">
              Password:
            </label>
            <div>
              <input
                class="form-control"
                id="pwd"
                type="password"
                placeholder="Enter password"
                required=""
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label" for="rpwd">
              Repeat password:
            </label>
            <div>
              <input
                class="form-control"
                id="rpwd"
                type="password"
                placeholder="Enter password"
                required=""
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-1">
              <button class="btn btn-block" id="log" type="submit">
                LOG IN
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="tab-pane" id="signin">
        <h6 class="mt-3 mb-3">Enter registration data to enter your personal account.</h6>
        <form>
          <div class="form-group">
            <label class="control-label" for="emails">
              Email:
            </label>
            <div>
              <input
                class="form-control"
                id="emails"
                type="email"
                placeholder="Enter email"
                required=""
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label" for="pwds">
              Password:
            </label>
            <div>
              <input
                class="form-control"
                id="pwds"
                type="password"
                placeholder="Enter password"
                required=""
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-1">
              <button class="btn btn-block" id="sign" type="submit">
                SIGN IN
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);
