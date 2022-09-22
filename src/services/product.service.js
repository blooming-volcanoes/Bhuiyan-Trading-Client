import httpReq from "./http.service";

class HttpProductService {
  async addSingleProduct(payload, config) {
    const data = httpReq.post("/product/add", payload, config);
    return data;
  }

  async uploadFeatureImage(payload) {
    const data = await httpReq.post("/gallery/upload", payload);
    return data;
  }
  async uploadGalleryImage(payload) {
    const data = await httpReq.post("/gallery/bulkUpload", payload);
    return data;
  }
}

const httpProductService = new HttpProductService();

export default httpProductService;
