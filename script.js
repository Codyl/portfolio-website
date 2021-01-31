let codyLillywhiteh1 = document.getElementById("codyLillywhiteh1");
document.addEventListener("scroll", () => {
    if(window.scrollY > 300) {
        codyLillywhiteh1.classList.add("titleNav");
        codyLillywhiteh1.classList.remove("center");
    }
    else if(window.scrollY < 200){
        codyLillywhiteh1.classList.add("center");
        codyLillywhiteh1.classList.remove("titleNav");
    }
});