import httpReq from "./http.service";

class UserService {
  async updateUserInfo(payload, config) {
    return await httpReq.put("/user/updateUser", payload, config);
  }
}

const httpUserService = new UserService();

export default httpUserService;
