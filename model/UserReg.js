const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://aravindsa:aravindsa@cluster0.dhlmxfj.mongodb.net/main?retryWrites=true&w=majority")
.then(()=>{console.log("UserReg DB connected")})
.catch(err=>console.log(err));

const uregschema = new mongoose.Schema(
    {
        fullname:String,
        email:String,
        phone:String,
        password:String,
        age:Number,
    }
);
var data4model = mongoose.model("UReg",uregschema)
module.exports=data4model;