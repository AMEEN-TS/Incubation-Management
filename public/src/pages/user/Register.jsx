import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import axios from "axios";
import '../style/user/register.css'
function Register() {
  const navigate = useNavigate();
    const [values,setValues] = useState({
        email:"",
        password:"",
    });

    const generateError = (error) =>
    toast.error(error, {
      position:"top-right",
    });
    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            console.log(values);
            const { data } = await axios.post("http://localhost:4000/register",
            {
                ...values,
            },{ withCredentials: true });
           
            if(data){
              if (data.errors) {
                const { email, password } = data.errors;
                if (email) generateError(email);
                else if (password) generateError(password);
              } else {
                navigate("/")
              }
            }
        }catch(err){
            console.log(err)
        }
    };


  return (
    <div className="body2">
   <div className="containers">
      <h2>Register Account</h2>
      <form className="form2" onSubmit={(e) => handleSubmit(e)}>
        <div className="formdiv2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values,[e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="formdiv2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account ?<Link to="/login"> Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
  
}

export default Register
