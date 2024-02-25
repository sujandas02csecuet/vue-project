import axios  from "axios";
class StudentDataService{
    retrieveAllStudents(){

        return axios.get(`https://localhost:44384/api/Student/GetAllStudents`);
    }
}

export default new StudentDataService()