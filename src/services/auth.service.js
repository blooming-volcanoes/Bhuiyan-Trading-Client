import httpReq from "./http.service";
class AuthService {
  async register(payload) {
    return await httpReq.post("/user/signup", payload);
  }
  async login(payload) {
    return await httpReq.post("/user/login", payload);
  }
}

const httpAuthService = new AuthService();

export default httpAuthService;
