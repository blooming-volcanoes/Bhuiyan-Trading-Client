import httpReq from "./http.service";

class HttpProductService {
  async getSingleProductById(id) {
    const data = await httpReq.get(`/product/get/${id}`);
    return data;
  }
  // Get with Pagination
  async getProductByCateGoryWithPagination(id, pageNo) {
    const data = await httpReq.get(`/product/categoryId/${id}?page=${pageNo}`);
    return data;
  }
  // get all without pagination
  async getAllProductByCateGory(id) {
    const data = await httpReq.get(`/product/categoryId/${id}`);
    return data;
  }
  async getAllProducts() {
    const data = await httpReq.get("/product/get");
    return data;
  }
  async getAllProductsByPagination(pageNo) {
    const data = await httpReq.get(`/product/get?page=${pageNo}`);
    return data;
  }

  async addSingleProduct(payload, config) {
    const data = await httpReq.post("/product/add", payload, config);
    return data;
  }
  async updateSingleProduct(id, payload) {
    const data = await httpReq.put(`/product/update/${id}`, payload);
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
  async deleteProduct(id, config) {
    const data = await httpReq.delete(`/product/delete/${id}`, config);
    return data;
  }
  async deleteGalleryImages(name) {
    const data = await httpReq.delete(`/gallery/file/${name}`);
    return data;
  }
}

const httpProductService = new HttpProductService();

export default httpProductService;
