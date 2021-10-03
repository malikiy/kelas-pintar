const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    subject_id : {
        type : Number,
        required : [true, 'subject_id is required']
    },
    subject_name : {
        type : String,
        required : [true, 'subject_name is required']
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
}, {collection: 'subject'});

const Subject = mongoose.model("Subject", SubjectSchema)
module.exports = {Subject, SubjectSchema};