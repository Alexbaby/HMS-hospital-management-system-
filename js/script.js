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
$('#makeappointment').modal({
    backdrop: 'static',
    keyboard: false
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        } else {
        a[i].style.display = "none";
        }
    }
}