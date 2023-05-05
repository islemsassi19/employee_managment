var EmployeeRouter = require('express').Router();
var EmployeeController = require('./EmployeeController');



EmployeeRouter.route('/employ')
.get(EmployeeController.retrieve)
.post(EmployeeController.createOne)

EmployeeRouter.route('/:name')
.delete(EmployeeController.deleteOne)

module.exports = EmployeeRouter;