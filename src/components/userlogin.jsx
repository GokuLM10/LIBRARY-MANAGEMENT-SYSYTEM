import { useNavigate } from "react-router-dom";
import '../styles/userlogin.css'

const UserLogin = () => {
    let navigate = useNavigate()
    let login=()=>{
        navigate('/user/')
    }
    return ( 
        <div className="userlogin">
            <div className="formcard">
                <h1>Login as User</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>
                        <div className="email">
                            <label htmlFor="">Email</label><br />
                            <input type="email" placeholder="Enter email" />
                        </div>
                        <div className="password">
                            <label htmlFor="">Password</label><br />
                            <input type="password" placeholder="Enter password" />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    
     );
}
 
export default UserLogin;