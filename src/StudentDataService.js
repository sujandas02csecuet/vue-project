import axios  from "axios";
class StudentDataService{
    retrieveAllStudents(){

        return axios.get(`https://localhost:44384/api/Student/GetAllStudents`);
    }
    deleteStudentByRoll(rollNumber){
           return axios.delete(`https://localhost:44384/api/Student/DeleteStudentByRoll/${rollNumber}`);

    }
}

export default new StudentDataService()