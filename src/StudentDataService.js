import axios  from "axios";
const USER_API_URL = 'https://localhost:44384/api/Student'
class StudentDataService{
    retrieveAllStudents(){

        return axios.get(`${USER_API_URL}/GetAllStudents`);
    }

    createStudent(student) {
        return axios.post(`${USER_API_URL}/AddStudent`, student);
    }



    retrieveStudent(id) {
        return axios.get(`${USER_API_URL}/GetAllStudentsById/${id}`);
    }

    deleteStudentByRoll(rollNumber){
           return axios.delete(`${USER_API_URL}/DeleteStudentByRoll/${rollNumber}`);

    }
}

export default new StudentDataService()