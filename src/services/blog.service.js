import httpReq from "./http.service";

class HttpBlogService {
  async createBlog(payload) {
    return await httpReq.post(`/blog/post`, payload);
  }
}

const httpBlogService = new HttpBlogService();

export default httpBlogService;
