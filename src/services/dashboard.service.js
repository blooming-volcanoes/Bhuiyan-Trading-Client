import httpReq from "./http.service";

class DashboardService {
  async uploadImage(payload) {
    const data = await httpReq.post("/gallery/upload", payload);
    return data;
  }
  async postNewHeaderData(payload) {
    const data = await httpReq.post("/header", payload);
    return data;
  }
  async getHeaderData() {
    const data = await httpReq.get("/header");
    return data;
  }
}

const httpDashboardService = new DashboardService();

export default httpDashboardService;
