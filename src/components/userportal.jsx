import { Routes,Route } from "react-router-dom";
import BookList from "./booklist";
import ReadBook from "./readBook";
import UserDashboard from "./userdashboard";
import UserNavbar from "./usernavbar";

const UserPortal = () => {
    return ( 
        <div className="userportal">
            <UserNavbar/>
            <Routes>

                <Route path="/" element={<UserDashboard/>}/>
                <Route path="/booklist" element={<BookList/>}/>
                <Route path='/booklist/:id' element={<ReadBook/>}/>

            </Routes>
        </div>
     );
}
 
export default UserPortal;