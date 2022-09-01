//import useState hook to create menu collapse state
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie"
import axios from "axios";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiLoader,FiUsers } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import '../style/admin/adminHead.css'


const Header = () => {
    
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyAdmin = async () => {
      if (!cookies.jwt) {
        navigate("/adminlogin");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000/admin",
          {},
          { withCredentials: true }
        );
        if(!data.status){
          removeCookie('jwt');
          navigate('/adminlogin');
        }
      }
    };
    verifyAdmin();
  }, [cookies, navigate, removeCookie]);
  const logOut = () => {
    removeCookie("jwt");
    navigate("/adminlogin");
  };


  return (
    <>
       

      
        <div className="adminnav">
      <h1>Welcome Admin </h1>
      

      </div>

        <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Admin" : "Admin"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem onClick={()=>navigate("/admin")}  icon={<FiHome />}>
                Home
              </MenuItem>
              {/* <MenuItem icon={<FaList />}>Category</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem> */}
              {/* <MenuItem icon={<FaList />}>Dashboard</MenuItem> */}
              <MenuItem onClick={()=>navigate("/user")}  icon={<FiUsers />}>Users</MenuItem>
              {/* <MenuItem icon={<RiPencilLine />}>Author</MenuItem> */}
              <MenuItem onClick={()=>navigate("/admin2")}  icon={<FiLoader />}>Applications</MenuItem>
              {/* <MenuItem icon={<BiCog />}>Settings</MenuItem> */}
               <MenuItem onClick={()=>navigate("/slot")} icon={<FaList />}>Slot</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem onClick={logOut} icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
        </div>
      
      {/* <div className="adminhome">
        <h1>Welcome INCUBATION</h1>
        
    </div> */}
     
    </>
  );
};

export default Header;