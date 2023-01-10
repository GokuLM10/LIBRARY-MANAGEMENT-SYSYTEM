import { useEffect,useState } from "react";
import '../styles/userlist.css'
const UsersList = () => {
    let [users,setUser] = useState([])

    useEffect(()=>{
        let fetchdata =async()=>{
         let response =await fetch('http://localhost:4000/users')
         let data =await response.json()
         setUser(data)
        }
        fetchdata()

    },[])

    let handleDelete =(name,id)=>{
        setUser(users.filter(x=>x.id!==id))
        alert(`${name} has been deleted`)


    }
    return ( 
        <div className="userslist">
            <h1>Users List</h1>
            <div className="usersection">
                {
                   users.map(data =>(
                    <div className="usercard">
                        <h3>{data.name}</h3>
                        <h5>{data.age}</h5>
                        <h5>{data.email}</h5>
                        <h5>{data.phoneNumber}</h5>
                        <h5>{data.id}</h5>
                        <button onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
                    </div>
                   ))
                }
            </div>
        </div>
     );
}
 
export default UsersList;