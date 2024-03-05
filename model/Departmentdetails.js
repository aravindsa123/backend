const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://aravindsa:aravindsa@cluster0.dhlmxfj.mongodb.net/main?retryWrites=true&w=majority")
.then(()=>{console.log("Dept DB connected")})
.catch(err=>console.log(err));

let sa=mongoose.Schema;
const subcateschema=new sa(
    {
        id:String,
        pname:String,
        sp:String,
        status:String
    }
);
var subcatemodel=mongoose.model("subcat",subcateschema)
module.exports=subcatemodel;