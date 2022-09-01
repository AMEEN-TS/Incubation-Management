import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React,{useEffect} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {useCookies} from "react-cookie"
import axios from "axios"
import {ToastContainer,toast} from 'react-toastify'
import "../pages/style/home.css"

function CollapsibleExample() {


    const navigate = useNavigate();
    const [cookies,setCookie,removeCookie] = useCookies([]);
    useEffect(()=>{
        const verifyUser = async () => {
            if (!cookies.jwt) {
              navigate("/login");
            } else {
              const { data } = await axios.post(
                "http://localhost:4000",
                {},
                {
                  withCredentials: true,
                }
              );
              if (!data.status) {
                removeCookie("jwt");
                navigate("/login");
              } else
                toast(`Hi ${data.user}`,{ theme: "dark"});
                
            }
          };
        verifyUser();
    },[cookies,navigate,removeCookie])
    const logOut = () =>{
        removeCookie("jwt");
        navigate("/register");
    }



  return (
<>
    
   

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >
        <Link className="link" to="/"><h3>Incubation</h3></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href=" "><Link className="link" to="/form">Features</Link></Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Welcome Ameen</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            <button onClick={logOut} >Log Out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <ToastContainer />
    </>
    
  );
}

export default CollapsibleExample;