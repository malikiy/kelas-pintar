const Subject = require("./model").Subject;
const services = require("../utils/factoryHandler/service");

exports.create = services.createOne(Subject);
exports.getAll = services.getAll(Subject);
exports.getDataById = services.getOne(Subject);
exports.updateDataById = services.updateOne(Subject);
exports.delete = services.deleteOne(Subject);


