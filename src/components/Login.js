import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer, FormGroup, ButtonGroup } from "./Login.style";
import { validateUser } from "../utils/auth";
import { Button } from "react-bootstrap";

const Login = ({ setUsername }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateUser(formData.username, formData.password)) {
      setUsername(formData.username);
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        {error && <p>{error}</p>}
        <ButtonGroup>
          <Button type="submit">Login</Button>
          <Button type="button" onClick={handleRegister}>
            Register
          </Button>
        </ButtonGroup>
      </form>
    </LoginContainer>
  );
};

export default Login;
