import httpReq from "./http.service";

class HttpContactService {
  async getAllContactData() {
    return await httpReq.get("/contact");
  }
  async getAllContactDataByPagination(pageNo) {
    return await httpReq.get(`/contact?page=${pageNo}`);
  }
}

const httpContactService = new HttpContactService();

export default httpContactService;
