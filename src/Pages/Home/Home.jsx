import React from "react";
import "./Home.scss";

const Home = () => {
  const valid = () => {
    alert("yes");
  };

  return (
    <div className="h_main">
      <div className="h_pillar">
        <h1>Welcome to my page pls log in</h1>
        <div className="l_form">
          {/* TODO: make a log in form that will comunicate with the storage */}

          <form onSubmit={valid} className="main_form">
            <label htmlFor="form_name" className="label">
              Username
            </label>
            <input
              type="text"
              name="form_name"
              className="name form_cont"
              placeholder="Username"
              tabIndex={1}
              required
            />
            <label htmlFor="form_password" className="label">
              Password
            </label>
            <input
              type="password"
              name="form_password"
              className="password form_cont"
              placeholder="Password"
              tabIndex={2}
              required
            />
            <input type="submit" value="Log In" />
          </form>

          {/* https://learnersbucket.com/examples/react/login-form-component-in-react/ */}
        </div>
        <div className="about">
          <a href="#">About</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
