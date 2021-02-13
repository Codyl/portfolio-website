let codyLillywhiteh1 = document.getElementById("codyLillywhiteh1");
const titleNav = document.getElementById('titleNav');
let background = document.getElementById("bg");
let smallNavDisplayActive =false;
const NAV_ANCHOR_NAMES = ["About", "Interests", "Projects", "Contact"];
const isDisplayingSmallNav = false;


document.addEventListener("scroll", () => {
    if(window.scrollY > 400) {
        titleNav.classList.remove('isHidden');
    }
    else if(window.scrollY < 350){
        titleNav.classList.add('isHidden');
    }
    if(smallNavDisplayActive) {
        setSmallNavDisplayInactive();
    }
});
document.getElementById('navIcon').addEventListener('click', () => {
        if(smallNavDisplayActive) {
            setSmallNavDisplayInactive();
        }
        else {
            setSmallNavDisplayActive();
            smallNavDisplayActive = true;
        }
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
    smallNavDisplayActive = false;
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
