const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    report_id : {
        type : Number,
        required : [true, 'report_id is required']
    },
    student_id : {
        type : mongoose.Schema.ObjectId,
        ref: "Student",
        required : [true, 'student_id, is required']
    },
    grade : {
        type : Number,
        required : [true, 'grade is required']
    },
    subject_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Subject',
        required: [true, 'subject_id is Required']
    },
    chapter_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Chapter',
        required: [true, 'chapter_id is Required']
    },
    score: {
        type: Number,
        required: [true, 'score is required']
    },
    created_at : {
        type : Date,
        default : Date.now,
        required : [true, 'created_at is required']
    },
    updated_at : {
        type : Date,
    }
}, {collection: 'report'});

const Report = mongoose.model("Report", ReportSchema)
module.exports = {Report, ReportSchema};