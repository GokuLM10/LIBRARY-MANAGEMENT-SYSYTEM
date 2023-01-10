import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adduser.css'

const AddUser = () => {

    let [name,setName] = useState("")
    let [age,setAge] = useState("")
    let [email,setEmail] = useState("")
    let [phoneNumber,setPhone] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault();

        let userData = {name,age,email,phoneNumber}

        fetch('http://localhost:4000/users',{
            method : 'POST',
            headers:{ 'Content-Type': 'application/json' },
            body : JSON.stringify(userData)
        })

        alert('user added successfully')
        navigate('/admin/adduser')

    }
    
    return ( 
        <div className="adduser">
            <h1>Add a New User</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input value={name} on onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter name of the user" />
                    </div>
                    <div className="age">
                        <input value={age} on onChange={(e)=>setAge(e.target.value)} type="number" minLength='1' placeholder="enter age of the user" />
                    </div>
                    <div className="email">
                        <input value={email} on onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="enter your email" />
                    </div>
                    <div className="phone_no">
                        <input value={phoneNumber} on onChange={(e)=>setPhone(e.target.value)} type="tel" minLength='10' maxLength='10' placeholder="enter your phone number" />
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;