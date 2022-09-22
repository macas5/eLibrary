import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="loginFormWrapper">
        <div className="loginFormTitle">Login</div>
        <div className="loginFormBox">  
            <div className="loginFormFirstSection">
                <div className="loginFormRow">
                    <div className="loginFormLabel">Username</div>
                    <input type="text" />
                </div>
                <div className="loginFormRow">
                    <div className="loginFormLabel">Password</div>
                    <input type="password" />
                </div>
                <div className="loginFormButton">
                    <button>Login</button>
                </div>     
            </div>   
            <div className="loginFormSecondSection">
                <div className="loginFormSectionTitle">You do not have an account?</div>
                <div className="loginFormButton">
                    <button>Register</button>
                </div>   
            </div>  
        </div>
    </div>      
  );
};

export default LoginForm;
