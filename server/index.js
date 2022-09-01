const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./Routes/UserRoutes");
const cookieParser = require("cookie-parser");
const AdminRoutes = require('./Routes/AdminRoutes')

app.listen(4000, () => {
    console.log("sever started on Port 4000")
});

mongoose.connect("mongodb://localhost:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connection Sucessfull ")
}).catch(err => {
    console.log(err.message)
})

app.use(cors({

    origin: ["http://localhost:3000"],
    methods: ['GET', 'POST',"PUT","PATCH"],
    credentials: true,

}));

app.use(cookieParser())
app.use(express.json());
app.use("/", authRoutes);
app.use('/admin',AdminRoutes);