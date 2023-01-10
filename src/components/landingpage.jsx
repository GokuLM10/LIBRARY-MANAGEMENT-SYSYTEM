import { Link } from "react-router-dom";
import '../styles/landingpage.css'
const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="home">

                <div className="selectLoginType">

                    <h1>Library Management System</h1>
                    <div className="image">
                        <img height="100" width="100" src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-13/256/User-Orange-icon.png" alt="" />
                        <img height="100" width="100" src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-13/512/User-Green-icon.png" alt="" />
                        
                    </div>
                    <div className="button">

                        <div className="btn1">
                            <Link to='/admin-login'>Admin Login</Link>
                        </div>
                        <div className="btn2">
                            <Link to='/user-login'>User Login</Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default LandingPage;