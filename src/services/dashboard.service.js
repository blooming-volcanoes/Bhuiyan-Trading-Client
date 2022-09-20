import httpReq from "./http.service";

class DashboardService {
  async uploadImage(payload) {
    const data = await httpReq.post("/gallery/upload", payload);
    return data;
  }
}

const httpDashboardService = new DashboardService();

export default httpDashboardService;
