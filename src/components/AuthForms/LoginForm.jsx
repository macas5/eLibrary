import "./AuthForms.css";

const LoginForm = () => {
  return (    
    <div className="authFormWrapper">
        <div className="authFormTitle">Login</div>
        <div className="authFormBox">  
            <div className="authFormFirstSection">
                <div className="authFormRow">
                    <div className="authFormLabel">Username</div>
                    <input type="text" />
                </div>
                <div className="authFormRow">
                    <div className="authFormLabel">Password</div>
                    <input type="password" />
                </div>
                <div className="authFormButton">
                    <button>Login</button>
                </div>     
            </div>   
            <div className="authFormSecondSection">
                <div className="authFormSectionTitle">You do not have an account?</div>
                <div className="authFormButton">
                    <button>Register</button>
                </div>   
            </div>  
        </div>
    </div>      
  );
};

export default LoginForm;
