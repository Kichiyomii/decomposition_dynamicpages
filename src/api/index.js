import axios from 'axios'
axios.interceptors.response.use(
    function (response) {
      return response.data;
    },
    (error) => {
      return error.response.data;
    }
  );
  export default {
    posts: {
        async getposts(page, limit) {
          return await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=" + limit + "&_page=" +  page);
        },
    }
  }
      