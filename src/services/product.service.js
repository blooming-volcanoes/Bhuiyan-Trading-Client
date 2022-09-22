import httpReq from "./http.service";

class HttpProductService {
  async uploadFeatureImage(payload) {
    const data = await httpReq.post("/gallery/upload", payload);
    return data;
  }
  async uploadImage(payload) {
    const { data } = await httpReq.post("/gallery/bulkUpload", payload);
    return data;
  }
}

const httpProductService = new HttpProductService();

export default httpProductService;
