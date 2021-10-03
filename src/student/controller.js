const Student = require("./model").Student;
const services = require("../utils/factoryHandler/service");
// const errorHandler = require("../../controllers/errorController");

exports.create = services.createOne(Student);
exports.getAll = services.getAll(Student);
exports.getDataById = services.getOne(Student);
exports.updateDataById = services.updateOne(Student);
exports.delete = services.deleteOne(Student);


