// sidebar
// sidebar-toggle
// close-btn
sider=document.querySelector(".sidebar");
toggler=document.querySelector(".sidebar-toggle");
closer=document.querySelector(".close-btn");
toggler.addEventListener("click",function(){
    sider.classList.toggle("show-sidebar");
 
});

closer.addEventListener("click",function(){
    sider.classList.remove("show-sidebar")
 
});