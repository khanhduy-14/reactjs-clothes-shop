import React, { Component } from "react";
import FormInput from "../components/forms/FormInput";
import { auth, handleUserProfile } from "./../firebase/firebase-config";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: [],
};

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword, errors } =
      this.state;

    if (password !== confirmPassword) {
      const err = ["Password dont' match"];
      this.setState({
        errors: err,
      });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile({ user });
        console.log(user);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword, errors } =
      this.state;
    return (
      <div className="flex h-[400px] w-full items-center justify-center flex-col gap-3">
        {errors.length > 0 &&
          errors.map((err, index) => {
            return <span key={index}>{err}</span>;
          })}
        <form onSubmit={this.handleFormSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full Name"
            handleChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={this.handleChange}
          />
          <button className="px-8 py-4 border-2 border-solid border-black">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default SignupPage;
