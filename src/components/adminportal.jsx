import { Routes,Route } from "react-router-dom";   
import ReadBook from "./readBook";
import AdminDasboard from "./admindashboard"; 
import AdminNavbar from "./adminnavbar";                                                                                                                                                                                                                                                         
import BookList from "./booklist";
import UsersList from "./userlist";
import AddBook from "./addbook";
import AddUser from "./addUser";

const AdminPortal = () => {
    return ( 
        <div className="adminportal">
         <AdminNavbar/>
         <Routes>
              <Route path='/' element={<AdminDasboard/>}/>
              <Route path='/booklist' element={<BookList/>}/>
              <Route path='/userslist' element={<UsersList/>}/>
              <Route path='/booklist/:id' element={<ReadBook/>}/>
              <Route path='/addbook' element={<AddBook/>}/>
              <Route path='/adduser' element={<AddUser/>}/>
              <Route path='/userlist' element={<UsersList/>}/>
         </Routes>
        </div>
     );
}
 
export default AdminPortal;