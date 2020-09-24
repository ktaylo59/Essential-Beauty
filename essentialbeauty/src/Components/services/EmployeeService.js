import axios from "axios";

const USER_API =
  "https://shrouded-hamlet-59718.herokuapp.com/kenisha_api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(USER_API);
  }
}

export default new EmployeeService();
