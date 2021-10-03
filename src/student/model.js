const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    student_id : {
        type : Number,
        required : [true, 'student_id is required']
    },
    name : {
        type : String,
        required : [true, 'name is required']
    },
    grade : {
        type : Number,
        required : [true, 'grade is required']
    },
    created_at : {
        type : Date,
        default : Date.now,
        required : [true, 'created_at is required']
    },
    updated_at : {
        type : Date,
    }
}, {collection: 'student'});

const Student = mongoose.model("Student", StudentSchema)
module.exports = {Student, StudentSchema};