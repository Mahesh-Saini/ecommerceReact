import "./CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div className="createAccount">
      <div className="createAccountWrapper">
        <form>
          <h2>Create Account</h2>
          <div className="inputBox">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="inputBox">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <div className="inputBox">
            <label htmlFor="">Confirm Password</label>
            <input type="password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
