import "./AuthForms.css";
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <div className="authFormWrapper">
        <div className="authFormTitle">Register</div>
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
                <div className="authFormRow">
                    <div className="authFormLabel">Repeat password</div>
                    <input type="password" />
                </div>
                <div className="authFormButton">
                    <button>Register</button>
                </div>     
            </div>   
            <div className="authFormSecondSection">
                <div className="authFormSectionTitle">Already have an account?</div>
                <div className="authFormButton">
                    <Link to="/login">
                      <button>Login</button>
                    </Link>
                </div>   
            </div>  
        </div>
    </div>          
  );
};

export default RegisterForm;
