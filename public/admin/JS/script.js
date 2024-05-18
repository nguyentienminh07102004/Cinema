// Lọc sản phẩm theo trạng thái
const filterStatus = document.querySelector("[filter-status]");
if(filterStatus){
  const buttonStatus = filterStatus.querySelectorAll("[btn-status]");
  let url = new URL(window.location.href);
  if(buttonStatus.length > 0){
    buttonStatus.forEach(button => {
      button.addEventListener("click", () => {
        const status = button.getAttribute("status");
        url.searchParams.set("status", status);
        window.location.href = url.href;
      });
    });
  }
}
// Lọc sản phẩm theo trạng thái