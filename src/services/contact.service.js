import httpReq from "./http.service";

class HttpContactService {
  async getAllContactData() {
    return await httpReq.get("/contact");
  }
  async getAllContactDataByPagination(pageNo) {
    return await httpReq.get(`/contact?page=${pageNo}`);
  }
  async createContactInfo(payload) {
    return await httpReq.post(`/contact`, payload);
  }
  async deleteContactInfo(id) {
    return await httpReq.delete(`/contact/${id}`);
  }
}

const httpContactService = new HttpContactService();

export default httpContactService;
