import axios  from "axios";
const USER_API_URL = 'https://localhost:44384/api/Employee'
class EmployeeDataService{

    retrieveAllEmployee(){

        return axios.get(`${USER_API_URL}/GetAllEmployees`);
    }
    deleteEmployeeById(id){
        return axios.delete(`${USER_API_URL}/DeleteEmployeeById/${id}`);
    }
    createEmployee(employee) {
        return axios.post(`${USER_API_URL}/AddEmployee`, employee);
    }

}

export default new EmployeeDataService()