import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <form>
          <h2>Login Account</h2>
          <div className="inputBox">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="inputBox">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
