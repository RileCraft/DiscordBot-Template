const app = require("express")();
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
module.exports = () => {
  app.listen(ROOT.config.port||5003);
};