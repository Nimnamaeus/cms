import axios from "axios"; // Add this import statement
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Col, FormGroup, Input, Row } from 'reactstrap';
import { storeUser } from "../../helpers";
import "./Login.css"; // Add the CSS file for login styles
import logo from "./logo.png"; // Replace "./logo.png" with the path to your logo image

const initialUser = { password: "", identifier: "" };

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = 'http://localhost:1337/api/auth/local';
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          toast.success('Logged In Successfully!', {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="login__container">
      <Row className="login">
        <Col>
          <img src={logo} alt="Logo" className="login__logo" />
          <h2 className="login__title">Login:</h2>
          <FormGroup>
            <Input
              type="email"
              name="identifier"
              value={user.identifier}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="login__input"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="login__input"
            />
          </FormGroup>
          <Button color="primary" onClick={handleLogin}>
            Login
          </Button>
          <h6 className="login__signup-link">
            Click <Link to="/registration">Here</Link> to sign up
          </h6>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
