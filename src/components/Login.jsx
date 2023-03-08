import axios from "axios";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
import { logInRequest } from "../store/user";
import styles from "../styles/RegisterLogin.module.css";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault()
   dispatch(logInRequest({
     email: email.value,
     password: password.value
   }))
   setTimeout(() => navigate("/movies"), 1000);
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              {...email}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              {...password}
              required
            />
          </div>
          <div className={styles.button}>
            <input type="Submit" value="Login" />
          </div>
          <div className="text">
            <h3>
              Don't have an account yet? <Link to="/user/register">Register</Link>
            </h3>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
