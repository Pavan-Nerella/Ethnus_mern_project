import React from "react";

export default function Register() {
  return (
    <div>
      <form layout="vertical">
        <div class="mb-3">
          <label for="Username" class="form-label">
            Name:
          </label>
          <input
            type="text"
            class="form-control"
            id="UserName"
            placeholder="Enter your name"
          />
        </div>
        <div class="mb-3">
          <label for="Email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="Enter your email id"
          />
        </div>
        <div class="mb-3">
          <label for="Password1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="Password1"
            placeholder="Enter strong password"
          />
        </div>
        <div class="mb-3">
          <label for="Password2" class="form-label">
            Conform Password
          </label>
          <input
            type="password"
            class="form-control"
            id="Password2"
            placeholder="conform password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
