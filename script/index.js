import { dataContent } from "./data.js";

let settings = {
    "open": true,
    interfaceLanguage: localStorage.leng || "UA",
    interfaceTheme: localStorage.theme || "dark"
}


let page = "home";


(() => {  // рендер фону
    let stepX = 27.0;
    let stepY = 23.5;

    for (let s = -10; s < 10; s++) {
        for (let i = -1; i < 10; i++) {
            let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute(
                "d",
                `M ${Boolean(s % 2) ? i * stepX + 13.5 : i * stepX
                } ${s * stepY} l 13 7.5 l 0 15 l -13.0 7.5 l -13 -7.5 l 0 -15 Z`
            );
            document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "svg")[0].appendChild(path);
        }
    }
})();


function openSetings() {
    settings.open = !settings.open;

    document.getElementById('overlay').style.animationName = settings.open
        ? "openOverlay"
        : "closeOverlay";

    document.getElementById('setingsMenu').style.animationName = settings.open
        ? "openSetingsMenu"
        : "closeSetingsMenu";
}

function settingsLeng() {
    settings.interfaceLanguage = settings.interfaceLanguage == "EN" ? "UA" : "EN";

    localStorage.setItem("leng", settings.interfaceLanguage);

    openPage(page)
}

function settingsTeheme() {
    settings.interfaceTheme = settings.interfaceTheme == "dark" ? "light" : "dark";

    localStorage.setItem("teheme", settings.interfaceTheme);

    openPage(page)
}

function openPage(ID) {
    page = ID;
    buttonNavRender();
    pageRender(page);
}

function buttonNavRender() {
    let navBar = document.getElementById('navBar');
    navBar.innerHTML = "";

    Object.keys(dataContent[settings.interfaceLanguage]).forEach((element) => {
        let createTeg = document.createElement("button");
        createTeg.className = "navPoint";
        createTeg.textContent = dataContent[settings.interfaceLanguage][element].h1;
        createTeg.onclick = () => openPage(element);

        navBar.appendChild(createTeg);
    })
}

const pageRender = (OpenID) => {
    let divContent = document.getElementById("content");
    divContent.innerHTML = "";

    dataContent[settings.interfaceLanguage][OpenID].content.forEach(element => {
        let addElem = Object.keys(element);
        let div = document.createElement("div");
        div.className = "contentItem";

        addElem.forEach(elem => {
            let createTeg = document.createElement(elem);

            elem !== "img" ?
                createTeg.textContent = element[elem].text :
                createTeg.src = element[elem].path;

            createTeg.className = element[elem].style;

            div.appendChild(createTeg);

            div.appendChild(createTeg);
        });

        divContent.appendChild(div);
    });
}

document.getElementById('buttonSettings').onclick = () => openSetings();
document.getElementById('setingsMenuButtonsLang').onclick = () => settingsLeng();
document.getElementById('setingsMenuButtonsTheme').onclick = () => settingsTeheme();
document.getElementById('overlay').onclick = () => openSetings();

openPage(page);
// settingsTeheme();


