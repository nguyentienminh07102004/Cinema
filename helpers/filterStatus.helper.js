const filterStatus = (req) => {
  let buttonStatus = [
    {
      name: "Tất cả",
      status: "All",
      active: ""
    },
    {
      name: "Hoạt động",
      status: "active",
      active: ""
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      active: ""
    }
  ];
  
  if(req.query.status){
    let index = buttonStatus.findIndex(button => req.query.status === button.status);
    buttonStatus[index].active = "active";
  } else {
    buttonStatus[0].active = "active";
  }
  return buttonStatus;
};

module.exports = filterStatus;
