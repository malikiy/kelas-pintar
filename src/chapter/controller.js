const Chapter = require("./model").Chapter;
const services = require("../utils/factoryHandler/service");

exports.create = services.createOne(Chapter);
exports.getAll = services.getAll(Chapter);
exports.getDataById = services.getOne(Chapter);
exports.updateDataById = services.updateOne(Chapter);
exports.delete = services.deleteOne(Chapter);


