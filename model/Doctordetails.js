const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://aravindsa:aravindsa@cluster0.dhlmxfj.mongodb.net/main?retryWrites=true&w=majority")
.then(()=>{console.log("Doc DB connected")})
.catch(err=>console.log(err));

let ca=mongoose.Schema;
const cateschema=new ca(
    {
        name:String,
        email:String,
        phone:String,
        hospital:String,
        specialization:String,
        experience:String,
        qualification:String,
        location:String,
        gender:String,
        image1:{
            data:Buffer,
            contentType:String,
        }
    }
);
var catemodel=mongoose.model("cat",cateschema)
module.exports=catemodel;