import axios from 'axios'
class SchoolDataService {

    retrieveAllSchools() {
        return axios.get(`https://localhost:44384/api/School/GetAllSchools`);
    }

    AddSchool(school) {
        return axios.post(`https://localhost:44384/api/School/AddSchoolNew/`,school);
    }
 

    deleteSchoolByCode(code) {
        return axios.delete(`https://localhost:44384/api/School/DeleteSchoolByCode/${code}`);
    }

    updateUser(id, user) {
        return axios.put(`${USER_API_URL}/users/${id}`, user);
    }
   
  }
export default new SchoolDataService()