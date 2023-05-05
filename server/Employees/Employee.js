var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

var EmployeeSchema=mongoose.Schema({
    name:{type:String,unique:true,required:true},
    description:{type:String,required:true},
    email:{type:String,required:true},

    imageUrl:{type:String}
})
 
var Employee=mongoose.model("Employee",EmployeeSchema);
 

module.exports = Employee;
