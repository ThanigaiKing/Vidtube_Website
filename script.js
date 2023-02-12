var menuIcon=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");
menuIcon.onclick=function()
{
    sidebar.classList.toggle("small-sidebar"); // if we click menuicon go inside the function .its create new class inside the sidebar(small-sidebar)
    container.classList.toggle("large-container");
}