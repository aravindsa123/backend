const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://aravindsa:aravindsa@cluster0.dhlmxfj.mongodb.net/main?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Doc DB connected");
  })
  .catch((err) => console.log(err));

let ca = mongoose.Schema;
const cateschema = new ca({
  did: { type: mongoose.Schema.Types.ObjectId, ref: "depts" },
  name: String,
  email: String,
  phone: String,
  hospital: String,
  specialization: String,
  experience: String,
  qualification: String,
  location: String,
  gender: String,
  timeSlot: String,
  image1: {
    data: Buffer,
    contentType: String,
  },
});
var catemodel = mongoose.model("doc", cateschema);
module.exports = catemodel;
