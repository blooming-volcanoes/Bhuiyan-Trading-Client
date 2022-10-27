import httpReq from "./http.service";

class BrandService {
  async getAllBrands() {
    return await httpReq.get("/header/sponsor/brand");
  }

  async postBrand(payload) {
    return await httpReq.post("/header/sponsor/brand", payload);
  }
  async deleteSingleBrandById(id) {
    return await httpReq.delete(`/header/sponsor/brand?id=${id}`);
  }
}

const httpBrandService = new BrandService();

export default httpBrandService;
