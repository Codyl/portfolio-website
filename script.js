let codyLillywhiteh1 = document.getElementById("codyLillywhiteh1");
let background = document.getElementById("bg");
let smallNavDisplayActive =false;
const NAV_ANCHOR_NAMES = ["About", "Interests", "Projects", "Contact"];

document.addEventListener("scroll", () => {
    if(window.scrollY > 400) {
        codyLillywhiteh1.classList.add("titleNav");
        codyLillywhiteh1.classList.remove("center");
        background.classList.add("transitionOpacity")
    }
    else if(window.scrollY < 350){
        codyLillywhiteh1.classList.add("center");
        codyLillywhiteh1.classList.remove("titleNav");
    }
});
document.getElementById('navIcon').addEventListener('click', () => {
    setSmallNavDisplayActive();
})
function setSmallNavDisplayActive() {
    document.getElementById('nav').style.height = "40vh";
    for(anchor of NAV_ANCHOR_NAMES) {
        displayNavAnchorByName(anchor);
    }
    document.getElementById("About").style.paddingTop = "30px";
}
function setSmallNavDisplayInactive() {
    document.getElementById('nav').style.height = "6vh";
    for(anchor of NAV_ANCHOR_NAMES) {
    document.getElementById(anchor).remove();
    }
}
function displayNavAnchorByName(anchorName) {
    let elem = document.createElement("a");
    elem.classList.add("anchor", "navText");
    elem.setAttribute("id",anchorName);
    elem.style.display = "block";
    elem.innerText = anchorName;
    elem.addEventListener("click", () => setSmallNavDisplayInactive());
    elem.href = "#"+anchorName.toLowerCase();
    document.getElementById('smallScreenNav').appendChild(elem);
}
