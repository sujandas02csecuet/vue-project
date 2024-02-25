import axios  from "axios";

class EmployeeDataService{

    retrieveAllEmployee(){

        return axios.get(`https://localhost:44384/api/Employee/GetAllEmployees`);
    }
    deleteEmployeeById(id){
        return axios.delete(`https://localhost:44384/api/Employee/DeleteEmployeeById/${id}`);
    }
}

export default new EmployeeDataService()