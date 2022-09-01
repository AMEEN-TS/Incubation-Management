import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../style/user/application.css";
import axios from "axios";
import Nav from "./navBar"
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Application() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [team, setTeam] = useState("");
  const [product, setProduct] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [proposition, setProposition] = useState("");
  const [competators, setCompetators] = useState("");
  const [revenue, setRevenue] = useState("");
  const [market, setMarket] = useState("");
  const [plan, setPlan] = useState("");
  const [proposal, setProposal] = useState("");
  const [type, setType] = useState("");
  const [confirmation, setConfimration] = useState("");
  const [error, setError] = useState("");


  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      neutral: {
        main: "#ffffff",
        contrastText: "#fff",
      },
    },
  });


  const [Status, setStatus] = useState([]);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userId = cookies.jwt;
    try {
      const data = {
        name,
        email,
        address,
        city,
        state,
        phoneNo,
        companyName,
        team,
        product,
        problem,
        solution,
        proposition,
        competators,
        revenue,
        market,
        plan,
        type,
        proposal,
        userId,
        // auth,
      };
      const application = await axios.post(
        "http://localhost:4000/userApplication",
        data
      );
      console.log(application);
      if (application.data.errors) {
        const errorappi = application.data.errors.application;
        toast(errorappi, { theme: "dark" });
      } else {
        
        toast("Application submited", { theme: "dark" });
        navigate("/");
      }
      setName("");
      setEmail("");
      setAddress("");
      setCity("");
      setState("");
      setPhoneNo("");
      setCompanyName("");
      setTeam("");
      setProduct("");
      setProblem("");
      setSolution("");
      setProposition("");
      setCompetators("");
      setRevenue("");
      setMarket("");
      setPlan("");
      setProposal("");
      setType("");
    } catch (err) {
      setError("Please fill all the fields");
    }
  };


  return (




    <>
      <Nav />
      <div className="formbody ">

        <h2>Application Form</h2>
        <Form onSubmit={submitHandler} >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address"  required />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city"  value={city} onChange={(e) => setCity(e.target.value)} placeholder="City"  required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              {/* <Form.Select defaultValue="Choose...">
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </Form.Select> */}
               <Form.Control type="text" name="state"  value={state} onChange={(e) => setState(e.target.value)} placeholder="State"  required />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Email"  required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone ID</Form.Label>
              <Form.Control  type="number" name="phoneno" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} placeholder="Phone"  required />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCompanyname">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text"  name="companyname" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name"  required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              {/* <Form.Label>Phone ID</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone" /> */}
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Describe you Team and Background</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here 1234"
                name="team"
                value={team}
                required
                onChange={(e) => setTeam(e.target.value)}
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Describe your Company and Product</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here 1234"
                name="companyandproduct"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                required
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Describe the problem you are trying to solve</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here 1234"
                name="problem"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                required
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>What is unique about your solution</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here 1234"
                name="solution"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                required
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>What is your value proposition for the customer</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here 1234"
                value={proposition}
                onChange={(e) => setProposition(e.target.value)}
                required
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Who are your competators and what is your competatiev advantage?</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here 1234"
                name="competators"
                value={competators}
                onChange={(e) => setCompetators(e.target.value)}
                required
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Explain your revenue model</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here 1234"
                name="revenue"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                required
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>What is the potential market size of the product?</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here 1234"
                name="potentialmarketsize"
                value={market}
                onChange={(e) => setMarket(e.target.value)}
                required
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>How do you market or plan to market your products and services?</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here 1234"
                name="plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                required
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Type of incubation needed</Form.Label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check className="mb-3"
                  inline
                  label="Physical Incubation"
                  name="select"
                  type={type}
                  value={"Physical"}
                  onClick={(e) => setType(e.target.value)}
                  required
               
                />
                <br></br>
                <Form.Check
                  inline
                  label="Virtual Incubation"
                  name="select"
                  type={type}
                  value={"Virtual"}
                  onClick={(e) => setType(e.target.value)}
                  
                />
              </div>
            ))}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Give a detailed business proposal</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here 1234"
                name="businessproposal"
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
                required
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Form.Group>





          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Application
