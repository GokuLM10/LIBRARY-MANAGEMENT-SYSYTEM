
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/landingpage';
import './App.css';
import AdminLogin from './components/adminlogin';
import UserLogin from './components/userlogin';
import AdminPortal from './components/adminportal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/user-login' element={<UserLogin/>}/>
        <Route path='/admin/*' element={<AdminPortal/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
