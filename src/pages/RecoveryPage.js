import React, { Component } from "react";
import FormInput from "../components/forms/FormInput";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const initialState = {
  email: "",
  errors: [],
};

class RecoveryPage extends Component {
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

    try {
      const { email, errors } = this.state;

      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          window.location.href = "/login";
        })
        .catch(() => {
          const err = ["Email wrong! Please try again"];
          this.setState({
            errors: err,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, errors } = this.state;
    return (
      <div className="flex h-[400px] w-full items-center justify-center flex-col gap-3">
        {errors.length > 0 &&
          errors.map((item, index) => <span key={index}>{item}</span>)}
        <form onSubmit={this.handleFormSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={this.handleChange}
          />

          <button className="px-8 py-4 border-2 border-solid border-black">
            Reset Password
          </button>
        </form>
      </div>
    );
  }
}

export default RecoveryPage;
