import httpReq from "./http.service";

class HttpCategoryService {
  async getAllCategory() {
    const data = await httpReq.get("/category/get");
    return data;
  }
  async getSingleCategoryById(id) {
    const data = await httpReq.get(`/category/get/${id}`);
    return data;
  }
  async getProductBySubCategory(categoryName) {
    const data = await httpReq.get(`/product/subCategory/${categoryName}`);
    return data;
  }
  async createCategory(payload) {
    const data = await httpReq.post("/category/add", payload);
    return data;
  }
  async updateCategory(id, payload) {
    const data = await httpReq.put(`/category/update/${id}`, payload);
    return data;
  }
  async uploadFeatureImage(payload) {
    const data = await httpReq.post("/gallery/upload/category", payload);
    return data;
  }
  async uploadGalleryImage(payload) {
    const data = await httpReq.post("/gallery/bulkUpload/category", payload);
    return data;
  }
  async deleteCategoryById(id) {
    const data = await httpReq.delete(`/category/delete/${id}`);
    return data;
  }
}

const httpCateGoryService = new HttpCategoryService();

export default httpCateGoryService;
