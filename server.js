const express = require('express')
const mongoose = require("mongoose")
const config = require('./config')
const app = express()
const bodyParser = require("body-parser");
 
const studentRouter = require("./src/student/router");
const subjectRouter = require("./src/subject/router");
const chapterRouter = require("./src/chapter/router");
const reportRouter = require("./src/report/router");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Server ON')
})
app.use("/api/student", studentRouter);
app.use("/api/subject", subjectRouter);
app.use("/api/chapter", chapterRouter);
app.use("/api/report", reportRouter);

// database connection
mongoose.connect(config.dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  
  db.on("error", (error) => console.log(error));
  db.once("open", async () => {
    console.log("DB Connected");
  });
 
//server start
app.listen(config.port, () => console.log(`server started at PORT ${config.port}`));