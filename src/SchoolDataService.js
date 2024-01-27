import axios from 'axios'
class SchoolDataService {

    retrieveAllSchools() {
        return axios.get(`https://localhost:44384/api/School/GetAllSchools`);
    }

    retrieveUser(id) {
        return axios.get(`${USER_API_URL}/users/${id}`);
    }

    deleteSchoolByCode(code) {
        return axios.delete(`https://localhost:44384/api/School/DeleteSchoolByCode/${code}`);
    }

    updateUser(id, user) {
        return axios.put(`${USER_API_URL}/users/${id}`, user);
    }
    createUser(user) {
        return axios.post(`${USER_API_URL}/users`, user);
    }
  }
export default new SchoolDataService()