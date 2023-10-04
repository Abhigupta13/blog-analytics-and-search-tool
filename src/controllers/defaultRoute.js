module.exports = {
  get: (req, res) => {
    res.json({
      "message": "This is the default route",
      "endpoints": [
        "/api/blog-stats",
        "/api/blog-search?query="
      ]
    });
  }
}
