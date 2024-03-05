const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://aravindsa:aravindsa@cluster0.dhlmxfj.mongodb.net/main?retryWrites=true&w=majority")
.then(()=>{console.log("Userlogin DB connected")})
.catch(err=>console.log(err));

const ulogschema = new mongoose.Schema(
    {
        username:String,
        password:String,
    }
);
var data3model = mongoose.model("ULogin",ulogschema)
module.exports=data3model;