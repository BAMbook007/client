import axios from "axios";

export default class PostService {
  static async getAll(/* limit=10, page=1 */) {
    const response = await axios.get('http://localhost:7000/posts',
    
    { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }

    /* {
      params: {
        _limit: limit,
        _page: page
      }
    }*/
    
    
    ) 

    return response;
  }
}