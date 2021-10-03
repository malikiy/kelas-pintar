const express = require('express');
const router = express.Router();
const controller = require("./controller");

router
.post('/', controller.create);

router
.get('/', controller.getAllReportAllStudent);

router
.get('/top3', controller.getTop3Student);

router
.get('/belowavg', controller.getBelowAverageStudent);


module.exports = router;
