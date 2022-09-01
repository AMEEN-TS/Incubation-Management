const UserModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken")
const ApplicationModel = require("../Models/ApplicationModel");
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "kishan sheth super secret key", {
    expiresIn: maxAge,
  });
};
const checkUser=(token) =>{
  return jwt.verify(token,"kishan sheth super secret key",async(err,decodedToken)=>{
    return await UserModel.findById(decodedToken.id)
});
}

const handleErrors = (err) => {
    let errors = { email: "", password: "" };
  
    console.log(err);
    if (err.message === "incorrect email") {
      errors.email = "That email is not registered";
    }
  
    if (err.message === "incorrect password") {
      errors.password = "That password is incorrect";
    }
  
    if (err.code === 11000) {
      errors.email = "Email is already registered";
      return errors;
    }
  
    if (err.message.includes("Users validation failed")) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }




module.exports.register = async (req, res, next)=>{
    
    try {
      
        const { email, password } = req.body;
        
        const user = await UserModel.create({ email, password });
        const token = createToken(user._id);
    
        res.cookie("jwt", token, {
          withCredentials: true,
          httpOnly: false,
          maxAge: maxAge * 1000,
        });
    
        res.status(201).json({ user: user._id, created: true });
      } catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({ errors, created: false });
      }
};

module.exports.login = async (req, res, next)=>{

    try {
      
        const { email, password } = req.body;
   
        const user = await UserModel.login( email, password );
        const token = createToken(user._id);
    
        res.cookie("jwt", token, {
          withCredentials: true,
          httpOnly: false,
          maxAge: maxAge * 1000,
        });
    
        res.status(200).json({ user: user._id, created: true });
      } catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({ errors, created: false });
      }

};
module.exports.userApplication=async(req,res,next)=>{
  try{
    const user=await checkUser(req.body.userId)
      const userId=user._id


    const {
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
      } = req.body;
    const application=await ApplicationModel.create({name,
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
      // status: "PENDING",
      userId,
      bookingStatus: false,
      // slotCode: "null",
    })
    
    res.status(201).json({ name: application.name, created: true });

  } catch(err){
    console.log(err);
    const errors = handleErrors(err);
    console.log(errors);
    res.json({ errors, created: false });
  }
};

module.exports.getstatus=async(req,res,next)=>{
  try{
    // console.log("ldkjs");
    const user= await checkUser(req.params.id)
      const userId=user._id
      console.log(userId);
    const getstatus=await ApplicationModel.findOne({userId:userId})
    // console.log(getstatus);+
    if(!getstatus){
      res.json({status:false})
    }
    res.json({status:true,data:getstatus.status,id:getstatus._id})
  }catch(err){

  }
};

module.exports.Viewapplication = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const id=req.params.id
    const data=await ApplicationModel.findById({_id:id})
    console.log(data);
    res.json({data, status: true });
  } catch (err) {}
};





