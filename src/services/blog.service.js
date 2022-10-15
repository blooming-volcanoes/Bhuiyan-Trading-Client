import httpReq from "./http.service";

class HttpBlogService {
  async createBlog(payload) {
    return await httpReq.post(`/post/blog`, payload);
  }
  async getAllBlogs() {
    return await httpReq.get(`/post/blog`);
  }
}

const httpBlogService = new HttpBlogService();

export default httpBlogService;
