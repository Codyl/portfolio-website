let codyLillywhiteh1 = document.getElementById("codyLillywhiteh1");
let background = document.getElementById("bg");
document.addEventListener("scroll", () => {
    if(window.scrollY > 350) {
        codyLillywhiteh1.classList.add("titleNav");
        codyLillywhiteh1.classList.remove("center");
        background.classList.add("transitionOpacity")
    }
    else if(window.scrollY < 300){
        codyLillywhiteh1.classList.add("center");
        codyLillywhiteh1.classList.remove("titleNav");
    }
});