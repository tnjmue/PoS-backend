module.exports = (app) => {
  app.use((req, res, next) => {
    // runs whenever requested page is not available
    res.status(404).json({ message: "This route does not exist" });
  });

  app.use((err, req, res, next) => {
    // will handle the error whenever next(err) is called
    console.error("ERROR", req.method, req.path, err);

    // only rendered if the error occurred before sending the response
    if (!res.headersSent) {
      res.status(500).json({ message: "Internal server error. Check the server console",});
    }
  });
};
