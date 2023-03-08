import axios from "axios";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
import styles from "../styles/RegisterLogin.module.css";

const Register = () => {
  const navigate = useNavigate();

  const first_name = useInput();
  const last_name = useInput();
  const alias = useInput();
  const email = useInput();
  const password = useInput();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/api/user/register", {
        first_name: first_name.value,
        last_name: last_name.value,
        alias: alias.value,
        email: email.value,
        password: password.value,
      });
      setTimeout(() => navigate("/user/login"), 2000);
    } catch ({ error }) {
      console.log("Register Error", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              {...first_name}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your lastname"
              {...last_name}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your alias"
              {...alias}
              required
            />
          </div>
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

          {/* <div className={styles.checkbox}>
            <input type="checkbox" />
            <h3>I accept all terms & conditions</h3>
          </div> */}
          <div className={styles.button}>
            <input type="Submit" value="Register Now" />
          </div>
          <div className="text">
            <h3>
              Already have an account? <Link to="/user/login">Login</Link>
            </h3>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
