const dashboard = (req, res, next) => {
  res.render("admin/pages/dashboard/dashboard.pug", {
    title: "Dashboard"
  });
}

module.exports = { dashboard };