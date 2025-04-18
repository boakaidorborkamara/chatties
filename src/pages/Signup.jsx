import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Signup({ addUser }) {
  const [errors, setErrors] = useState([]);
  const [isValidFormData, setIsValidFormData] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function validateForm(form_field) {
    let new_error = {};

    // username field validation
    if (form_field.name === "username") {
      if (form_field.value.length === 0) {
        new_error.field = "username";
        new_error.msg = "Username must be provided.";

        setErrors([...errors, new_error]);
        return;
      } else if (form_field.value.length < 2) {
        new_error.field = "username";
        new_error.msg = "Username must be more than one character";

        setErrors([...errors, new_error]);
        return;
      }
    }

    // email field validation
    if (form_field.name === "email") {
      if (form_field.value.length === 0) {
        new_error.field = "email";
        new_error.msg = "Email must be provided.";

        setErrors([...errors, new_error]);
        return;
      } else if (
        !form_field.value.includes("@") ||
        !form_field.value.includes(".")
      ) {
        new_error.field = "email";
        new_error.msg = "Enter a valid email";

        setErrors([...errors, new_error]);
        return;
      }
    }

    // password field validation
    if (form_field.name === "password") {
      if (form_field.value.length === 0) {
        new_error.field = "Password";
        new_error.msg = "Password must be provided.";

        setErrors([...errors, new_error]);
        return;
      } else if (form_field.value.length < 5) {
        new_error.field = "password";
        new_error.msg = "Password must be more than 4 characters.";

        setErrors([...errors, new_error]);
        return;
      }
    }

    // empty error if validation is successful
    setErrors([]);

    if (!formData.username || !formData.email || !formData.password) {
      return;
    }

    setIsValidFormData(true);
  }

  function handleOnChange(element) {
    formData[element.name] = element.value;
    validateForm(element);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let username_field = e.target[0];
    let email_field = e.target[1];
    let password_field = e.target[2];

    let new_user = formData;

    if (errors.length > 0 || !isValidFormData) {
      if (username_field.value.trim() === "") {
        username_field.focus();
      } else if (email_field.value.trim() === "") {
        email_field.focus();
      } else if (password_field.value.trim() === "") {
        password_field.focus();
      }

      return;
    }

    addUser(new_user);

    // clear state
    setFormData({
      username: "",
      email: "",
      password: "",
    });
    e.target.reset();
  }

  return (
    <section className="bg-blue-400 h-lvh flex justify-center items-center">
      {/* signup form container  */}
      <div className="bg-white p-10 w-2/6 rounded-2xl">
        {/* logo  */}
        <div className="pb-3 gap-1 justify-center items-center flex">
          <div className="flex items-center">
            <img src="/assets/mingcute_chat-4-fill.png" alt="Chatties logo" />
            <img src="/assets/Chatties.png" alt="Chatties logo" />
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold mb-8">
          Create an Account
        </h2>

        <form action="" className="mb-7" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5">
            <label htmlFor="username" className="mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              autoComplete="off"
              className="appearance-none border rounded p-3 "
              defaultValue={formData.username}
              onChange={(e) => {
                handleOnChange(e.target);
              }}
              onFocus={(e) => {
                validateForm(e.target);
              }}
            />

            {/* error text  */}
            <p className="text-red-600">
              {errors[0] && errors[0].field === "username" ? errors[0].msg : ""}
            </p>
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              autoComplete="off"
              className="p-3 appearance-none border rounded "
              onChange={(e) => {
                handleOnChange(e.target);
              }}
              onFocus={(e) => {
                validateForm(e.target);
              }}
            />
            {/* error text  */}
            <p className="text-red-600">
              {errors[0] && errors[0].field === "email" ? errors[0].msg : ""}
            </p>
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              autoComplete="off"
              className="p-3 appearance-none border rounded "
              onChange={(e) => {
                handleOnChange(e.target);
              }}
              onFocus={(e) => {
                validateForm(e.target);
              }}
            />
            {/* error text  */}
            <p className="text-red-600">
              {errors[0] && errors[0].field === "password" ? errors[0].msg : ""}
            </p>
          </div>

          {/* login btn  */}
          <div className="flex flex-col mb-5">
            <input
              type="submit"
              value="Signup"
              className="p-3 appearance-none bg-blue-400 text-white rounded hover:cursor-pointer "
            />
          </div>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 font-medium">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
