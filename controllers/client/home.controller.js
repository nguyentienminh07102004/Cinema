const index = (req, res, next) => {
  res.render("client/pages/home/index.pug", {
    title: "Trang chủ"
  })
}

module.exports = { index };