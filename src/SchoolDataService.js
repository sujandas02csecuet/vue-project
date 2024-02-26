import axios from 'axios'
const USER_API_URL = 'https://localhost:44384/api/School'
class SchoolDataService {

    retrieveAllSchools() {
        return axios.get(`${USER_API_URL}/GetAllSchools`);
    }

    retrieveSchool(id) {
        return axios.get(`${USER_API_URL}/GetSchooById/${id}`);
    }

    deleteSchoolByCode(code) {
        return axios.delete(`${USER_API_URL}/DeleteSchoolByCode/${code}`);
    }
   
    createSchool(school) {
        return axios.post(`${USER_API_URL}/AddSchool`, school);
    }

   
  }
export default new SchoolDataService()