import httpReq from "./http.service";

class HttpBlogService {
  async createBlog(payload) {
    return await httpReq.post(`/post/blog`, payload);
  }
  async updateBlog(id, payload) {
    return await httpReq.put(`/post/blog/${id}`, payload);
  }
  async getSingleBlogBySlug(slug) {
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
  async searchBlogByTheTitle(payload) {
    return await httpReq.post(`/post/search`, payload);
  }
}

const httpBlogService = new HttpBlogService();

export default httpBlogService;
