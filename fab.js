var sidenav = document.querySelector(".sidebar")
let icon = document.getElementById("icon")
function shownavbar() {
    sidenav.style.left = "0%"
}

function closenavbar() {
    sidenav.style.left = "-60%"
}

icon.addEventListener('click',()=>{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src ="dark theme icon/sun.png"
    }
    else{
        icon.src ="dark theme icon/moon.png"
    }
})