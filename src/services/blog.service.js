import httpReq from "./http.service";

class HttpBlogService {
  async createBlog(payload) {
    return await httpReq.post(`/post/blog`, payload);
  }
  async getSingleBlogById(slug) {
    return await httpReq.get(`/post/blog/${slug}`);
  }
  async getAllBlogs() {
    return await httpReq.get(`/post/blog`);
  }
  async getAllBlogsWithPagination(pageNo) {
    return await httpReq.get(`/post/blog?page=${pageNo}`);
  }
  async deleteBlogBySlug(slug) {
    return await httpReq.delete(`/post/blog/${slug}`);
  }
}

const httpBlogService = new HttpBlogService();

export default httpBlogService;
