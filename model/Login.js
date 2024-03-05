const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://aravindsa:aravindsa@cluster0.dhlmxfj.mongodb.net/main?retryWrites=true&w=majority")
.then(()=>{console.log("Login DB connected")})
.catch(err=>console.log(err));

const logschema = new mongoose.Schema(
    {
        username:String,
        password:String,
    }
);
var data2model = mongoose.model("Login",logschema)
module.exports=data2model;