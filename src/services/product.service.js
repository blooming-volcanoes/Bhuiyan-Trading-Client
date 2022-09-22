import httpReq from "./http.service";

class HttpProductService {
  async getProductByCateGory(id, config) {
    const data = await httpReq.get(`/product/categoryId/${id}`, config);
    return data;
  }
  async getAllProducts() {
    const data = await httpReq.get("/product/get");
    return data;
  }

  async addSingleProduct(payload, config) {
    const data = await httpReq.post("/product/add", payload, config);
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
