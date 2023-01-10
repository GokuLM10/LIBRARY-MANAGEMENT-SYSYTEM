import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminlogin.css'

const AdminLogin = () => {

    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate();
    
    let login=(e)=>{
         e.preventDefault();
         let data = {email,password}
         if (email=="admin@gmail.com" && password==1234) {
            navigate('/admin/')
         } else {
            alert('Invalid credentials')
         }
    }
    return ( 
        <div className="adminlogin">

            <div className="formcard">
                <h1>Login as Admin</h1>

                <div className="form_input">
                    <form action="" onSubmit={login}>
                        <div className="email">
                            <label htmlFor="">Email</label><br />
                            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                        </div>
                        <div className="password">
                            <label htmlFor="">Password</label><br />
                            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
                        </div>
                        <button>Login</button>
                    </form>
                </div>

            </div>
        </div>
     );
}
 
export default AdminLogin;