// JavaScript for toggling the sidebar and shifting header/content
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');
    var header = document.querySelector('header');
    
    sidebar.classList.toggle('open');
    content.classList.toggle('shift');
    header.classList.toggle('shift');
}
