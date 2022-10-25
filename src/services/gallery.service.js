import httpReq from "./http.service";

class HttpGalleryService {
  async getGalleryImagesByPagination(page = 1, limit = 10) {
    const data = await httpReq.get(
      `/gallery/files?page=${page}&limit=${limit}`
    );
    return data;
  }
}

const httpGalleryService = new HttpGalleryService();

export default httpGalleryService;
