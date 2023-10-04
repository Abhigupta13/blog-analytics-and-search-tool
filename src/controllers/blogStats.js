const _ = require("lodash");
const fetchBlogs = require("../utils/fetchBlogs");

module.exports = {
  get: async (req, res) => {

    try {
      const response = await fetchBlogs();
      const total = _.size(response.blogs);
      const longest = _.maxBy(response.blogs, blog => blog.title.length);

      const keywords = _.filter(response.blogs, blog => blog.title.toLowerCase().includes("privacy"))
      const total_keyword = _.size(keywords);

      const unique = _.uniqBy(response.blogs, blog => blog.title);

      res.json(
        {
          total: total,
          title: longest.title,
          privacy: total_keyword,
          unique: unique
        }
      )
    }
    catch(err){
      res.json({ "message": "error" });
      console.log(err);
    }
  }
}
