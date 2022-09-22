import httpReq from "./http.service";

class HttpCategoryService {
  async getAllCategory() {
    const data = await httpReq.get("/category/get");
    return data;
  }
}

const httpCateGoryService = new HttpCategoryService();

export default httpCateGoryService;
