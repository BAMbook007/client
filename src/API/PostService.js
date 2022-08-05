import $api from "../http";

export default class PostService {
  static async getAll() {
    return $api.get('/getAllPosts');
  }
}