const _ = require("lodash");
const fetchBlogs = require("../utils/fetchBlogs.js");

module.exports = {
  get: async (req, res) => {
    try {
      if (req.query.query.length === 0)
        res.json({ "message": "No query provided" });
      else {
        const response = await fetchBlogs();
        const blogs = _.filter(response.blogs, blog => blog.title.toLowerCase().includes(req.query.query.toLowerCase())); //Search for a blog according to the query
        const total = _.size(blogs);

        res.json({
          count: total,
          blogs: blogs
        });
      }
    }
    catch (err) {
      res.json({ "message": "error" });
      console.log(err);
    }
  }
}