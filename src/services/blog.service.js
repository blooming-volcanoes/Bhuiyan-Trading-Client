import httpReq from "./http.service";

class HttpBlogService {
  async createBlog(payload) {
    return await httpReq.post(`/post/blog`, payload);
  }
}

const httpBlogService = new HttpBlogService();

export default httpBlogService;
