import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "./../firebase/firebase-config";
import FormInput from "../components/forms/FormInput";

const initialState = {
  email: "",
  password: "",
};

class LoginPage extends Component {
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
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      // console.log(err);
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="flex h-[400px] w-full items-center justify-center flex-col gap-3">
        <div
          className="px-14 py-3 text-black text-xl border-[1px] border-solid border-black rounded-xl"
          onClick={signInWithGoogle}
        >
          Login with google
        </div>
        <form onSubmit={this.handleSubmit}>
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
          <button className="px-8 py-4 border-2 border-solid border-black">
            Sign in
          </button>
        </form>
        <div>
          <span>You don't have accout? Please </span>
          <Link to="/signup">
            <span className="text-blue-500">sign up</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginPage;
