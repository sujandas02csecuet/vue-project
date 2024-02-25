import axios  from "axios";

class EmployeeDataService{

    retrieveAllEmployee(){

        return axios.get(`https://localhost:44384/api/Employee/GetAllEmployees`);
    }
}

export default new EmployeeDataService()