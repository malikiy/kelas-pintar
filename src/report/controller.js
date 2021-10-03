const Report = require("./model").Report;
const services = require("../utils/factoryHandler/service");

exports.getAllReportAllStudent = async (req, res, next) => {
    try {
        let finalData = []
        const allData = await Report.find()
        .populate("subject_id", "-__v")
        .populate("student_id", "-__v")
        .populate("chapter_id", "-__v")
        if(allData){
            allData.forEach((element, index) => {
                const getSameChapterId = allData.filter(e => e.chapter_id.chapter_name === element.chapter_id.chapter_name);
                const average = getSameChapterId.reduce((total, next) => total + next.score, 0) / getSameChapterId.length;
            finalData.push({
                report_id: element.report_id,
                student_name: element.student_id.name,
                subject_name: element.subject_id.subject_name,
                chapter_name: element.chapter_id.chapter_name,
                score: element.score,
                average_score: average
            })
            });
            res.status(201).json({
                status: "success",
                data: finalData,
                totalCount: allData.length
            });
        }
    }catch(error){
        console.log(error);
        return errorHandler(error);
    }
};

exports.getTop3Student = async (req, res, next) => {
    try {
        let finalData = []
        const allData = await Report.find()
        .populate("subject_id", "-__v")
        .populate("student_id", "-__v")
        .populate("chapter_id", "-__v")
        if(allData){
            allData.forEach((element, index) => {
                const getSameChapterId = allData.filter(e => e.student_id.name === element.student_id.name);
                const average = getSameChapterId.reduce((total, next) => total + next.score, 0) / getSameChapterId.length;
            finalData.push({
                student_name: element.student_id.name,
                grade: element.student_id.grade,
                subject_name: element.subject_id.subject_name,
                chapter_name: element.chapter_id.chapter_name,
                average_score: average
            })
            });
            finalData = finalData.filter((v,i,a)=>a.findIndex(t=>(t.student_name === v.student_name))===i)
            finalData.sort(function(a, b) {
                return parseFloat(b.average_score) - parseFloat(a.average_score) ;
            });
            finalData = finalData.slice(0, 3);
            res.status(201).json({
                status: "success",
                data: finalData
            });
        }
    }catch(error){
        console.log(error);
        return errorHandler(error);
    }
};

exports.getBelowAverageStudent = async (req, res, next) => {
    try {
        let finalData = []
        const allData = await Report.find()
        .populate("subject_id", "-__v")
        .populate("student_id", "-__v")
        .populate("chapter_id", "-__v")
        if(allData){
            allData.forEach((element, index) => {
                const getSameChapterId = allData.filter(e => e.chapter_id.chapter_name === element.chapter_id.chapter_name);
                const average = getSameChapterId.reduce((total, next) => total + next.score, 0) / getSameChapterId.length;
                if(element.score < average){
                    finalData.push({
                        report_id: element.report_id,
                        student_name: element.student_id.name,
                        subject_name: element.subject_id.subject_name,
                        chapter_name: element.chapter_id.chapter_name,
                        score: element.score,
                        average_score: average
                    })
                }
            });
            res.status(201).json({
                status: "success",
                data: finalData,
                totalCount: finalData.length
            });
        }
    }catch(error){
        console.log(error);
        return errorHandler(error);
    }
};

exports.create = services.createOne(Report);
exports.getAll = services.getAll(Report);
exports.getDataById = services.getOne(Report);
exports.updateDataById = services.updateOne(Report);
exports.delete = services.deleteOne(Report);


