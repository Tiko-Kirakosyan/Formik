import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field } from "formik";
import "./index.css";


// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = error => {
  return <div className="invalid-feedback">{error}</div>;
};

const validateUserName = value => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length > 12) {
    error = maxLength;
  }
  return error;
};

const validateName = value => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length > 12) {
    error = maxLength;
  }
  return error;
};

const validateEmail = value => {
  let error;
  if (!value) {
    error = required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validateMobileNumber = value => {
  let error;
  if (value.length > 12) {
    error = maxLength;
  }
  return error;
};

const validatePassword = value => {
  let error;
  if (!value) {
    error = required;
  }
  return error;
};

const validateDateOfBirth = value => {
  let error;
  if (!value) {
    error = required;
  } else if (
    !/(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i.test(
      value
    )
  ) {
    error = "Please use the following format MM/DD/YYYY";
  }
  return error;
};

export default function App() {
  return (
    <Formik
      initialValues={{
        username: "",
        name: "",
        mobilenumber: "",
        email: "",
        password: "",
        url: "",
        genderOptions: "",
        DateofBirth: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <div>
          <div>
            <h2>Client Profile</h2>
          </div>
          <div>
            <Form>
              <div>
                <Field
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                  validate={validateUserName}
                />
                {errors.username &&
                  touched.username &&
                  errorMessage(errors.username)}
              </div>
              <div>
                <Field
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="name"
                  validate={validateName}
                />
                {errors.name && touched.name && errorMessage(errors.name)}
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  validate={validateEmail}
                />
                {errors.email && touched.email && errorMessage(errors.email)}
              </div>
              <div>
                <Field
                  className="form-control"
                  type="tel"
                  placeholder="Mobile number"
                  name="mobilenumber"
                  validate={validateMobileNumber}
                />
                {errors.mobilenumber &&
                  touched.mobilenumber &&
                  errorMessage(errors.mobilenumber)}
              </div>
              <div>
                <Field
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  validate={validatePassword}
                />
                {errors.password &&
                  touched.password &&
                  errorMessage(errors.password)}
              </div>
              <div>
                <label>Gender</label>
                <br />
                <div>
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    value="Male"
                    id="inlineRadio1"
                  />
                  <label  htmlFor="inlineRadio1">
                    Male
                  </label>
                </div>
                <div>
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    value="Female"
                    id="inlineRadio2"
                  />
                  <label  htmlFor="inlineRadio2">
                    Female
                  </label>
                </div>
                <div>
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    value=" Non-binary"
                    id="inlineRadio3"
                  />
                  <label  htmlFor="inlineRadio3">
                    Non-binary
                  </label>
                </div>
              </div>
              <div>
                <Field
                  className="form-control"
                  type="datetime"
                  placeholder="Date of Birth"
                  name="DateofBirth"
                  validate={validateDateOfBirth}
                />
                {errors.DateofBirth &&
                  touched.DateofBirth &&
                  errorMessage(errors.DateofBirth)}
              </div>
              <div>
                <Field
                  placeholder = "About"
                  component="textarea"
                  className="form-control"
                  name="About"
                />
              </div>
              <div>
                <button type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

