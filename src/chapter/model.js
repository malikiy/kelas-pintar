const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
    chapter_id : {
        type : Number,
        required : [true, 'chapter_id is required']
    },
    chapter_name : {
        type : String,
        required : [true, 'chapter_name is required']
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
    created_at : {
        type : Date,
        default : Date.now,
        required : [true, 'created_at is required']
    },
    updated_at : {
        type : Date,
    }
}, {collection: 'chapter'});

const Chapter = mongoose.model("Chapter", ChapterSchema)
module.exports = {Chapter, ChapterSchema};