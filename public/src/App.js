import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/user/Register'
import Home from './pages/user/Home'
import Login from './pages/user/Login'
import Form from './pages/user/Application'
import Nav from './pages/user/navBar'
import Admin from './pages/admin/adminHome'
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin2 from './pages/admin/admin2'
import AdminLogin from "./pages/admin/adminLogin"
import ViewApplication from './pages/admin/ViewApplication'
import Slot from './pages/admin/slot'
import Status from './pages/user/Status'
import View from './pages/user/ViewApplication'
import User from './pages/admin/userManagement'

function App() {
  return (
    <BrowserRouter>

    <Routes>



    <Route exact path='/register' element={<Register/>} />
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/form' element={<Form/>} />
    <Route exact path='/nav' element={<Nav/>} />
    <Route exact path='/admin' element={<Admin/>} />
    <Route exact path='/admin2' element={<Admin2/>} />
    <Route exact path='/adminlogin' element={<AdminLogin/>} />
    <Route  exact path='/viewApplication' element={<ViewApplication/>}/>
    <Route  exact path='/slot' element={<Slot/>}/>
    <Route  exact path='/status' element={<Status/>}/>
    <Route  exact path='/view' element={<View/>}/>
    <Route  exact path='/user' element={<User/>}/>


    

    </Routes>


    </BrowserRouter>
  )
}

export default App
