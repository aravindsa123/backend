const express = require("express");
const cors = require("cors");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = new express();
const catemodel = require("./model/Doctordetails");
const subcatemodel = require("./model/Departmentdetails");
const data2model = require("./model/Login");
const data3model = require("./model/UserLogin");
const data4model = require("./model/UserReg");
const appmodel = require("./model/Appointmentdetails");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("hai");
});

app.post("/cnew", (request, response) => {
  console.log(request.body);
  new subcatemodel(request.body).save();
  response.send("Record Successfully Saved");
});

app.get("/doctorview", async (request, response) => {
  var data = await catemodel.find();
  response.send(data);
});

app.get("/subview", async (request, response) => {
  var data = await subcatemodel.find();
  response.send(data);
});

app.get("/view/:id", async (request, response) => {
  const { id } = request.params;
  var data = await catemodel.findById(id);
  console.log(data);
  response.send(data);
});
app.get("/book/:id", async (request, response) => {
  const { id } = request.params;
  var data = await appmodel.findById(id);
  console.log(data);
  response.send(data);
});

app.get("/display", async (request, response) => {
  var data = await catemodel.find();
  console.log(data);
  response.send(data);
});
app.get("/views", async (request, response) => {
  var data = await subcatemodel.find();
  response.send(data);
});

app.put("/edit/:id", async (request, response) => {
  let id = request.params.id;
  await catemodel.findByIdAndUpdate(id, request.body);
  response.send("Data uploaded");
});
app.put("/edits/:id", async (request, response) => {
  let id = request.params.id;
  await subcatemodel.findByIdAndUpdate(id, request.body);
  response.send("Data uploaded");
});

app.post("/new", upload.single("image1"), async (request, response) => {
  try {
    const {
      name,
      email,
      phone,
      hospital,
      specialization,
      experience,
      qualification,
      location,
      gender,
      timeSlot,
    } = request.body;
    const newdata = new catemodel({
      name,
      email,
      phone,
      hospital,
      specialization,
      experience,
      qualification,
      location,
      gender,
      timeSlot,
      image1: {
        data: request.file.buffer,
        contentType: request.file.mimetype,
      },
    });
    console.log(newdata);
    await newdata.save();
    response.status(200).json({ message: "Record saved" });
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/booking",  async (request, response) => {
  console.log(request.body)
   new appmodel(request.body).save();
   response.send("Record Saved")
})

app.get('/booking', async (request, response) => {
  var data = await appmodel.find();
  response.send(data)
});

app.post("/Loginsearch", async (request, response) => {
  const { username, password } = request.body;
  try {
    const user = await data2model.findOne({ username, password });
    if (user) {
      response.json({ success: true, message: "Login Successfully" });
    } else {
      response.json({ success: false, message: "Invalid Username and email" });
    }
  } catch (error) {
    response.status(500).json({ success: false, message: "Error" });
  }
});
app.listen(3002, (request, response) => {
  console.log("Port ok");
});

app.post("/ULoginsearch", async (request, response) => {
  const { username, password } = request.body;
  try {
    const user = await data3model.findOne({ username, password });
    if (user) {
      response.json({ success: true, message: "Login Successfully" });
    } else {
      response.json({ success: false, message: "Invalid Username and email" });
    }
  } catch (error) {
    response.status(500).json({ success: false, message: "Error" });
  }
});
app.listen(3003, (request, response) => {
  console.log("Port ok");
});

app.post("/UReg", async (request, response) => {
  try {
    const { fullname, email, phone, password, age } = request.body;
    const newdata = new data4model({
      fullname,
      email,
      phone,
      password,
      age,
    });
    console.log(newdata);
    await newdata.save();
    response.status(200).json({ message: "Registered Successfully" });
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
});
