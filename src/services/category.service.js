import httpReq from "./http.service";

class HttpCategoryService {
  async getAllCategory() {
    const data = await httpReq.get("/category/get");
    return data;
  }
  async createCategory(payload) {
    const data = await httpReq.post("/category/add", payload);
    return data;
  }
  async uploadFeatureImage(payload) {
    const data = await httpReq.post("/gallery/upload", payload);
    return data;
  }
}

const httpCateGoryService = new HttpCategoryService();

export default httpCateGoryService;
