const mayoralController = mayoralModule;

console.log("Loaded main");

mayoralController.init();

$("#sidebarCollapse").on("click", function() {
  $("#sidebar").toggleClass("active");
});
