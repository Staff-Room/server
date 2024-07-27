import Student from '../../models/student.model.mjs';

async function getDetailStudentController(req, res){
    try {
        const students = await Student.all({})
        return res.json(students)
    } catch (error) {
        return res.json(error)
    }
}


function postDetailStudentController(req, res){

    return res.json({'msg':'no students post' })

}
function putDetailStudentController(req, res){

    return res.json({'msg':'no students post' })

}
function patchDetailStudentController(req, res){

    return res.json({'msg':'no students post' })

}

export { getDetailStudentController , postDetailStudentController, putDetailStudentController, patchDetailStudentController};