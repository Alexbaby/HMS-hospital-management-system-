function sideBar() {
    var sidebar = document.getElementById("sidebar-menu");
    var sidebar_container = document.getElementById("side-bar-container");
    var topbar = document.getElementById("top-bar");
    var close = document.getElementById("close-btn")
    sidebar_container.classList.toggle("side-bar-container-offset")
    close.classList.toggle("view-close-btn");
    sidebar.classList.toggle("sidebar-offset");
    topbar.classList.toggle("top-bar-offset");
}