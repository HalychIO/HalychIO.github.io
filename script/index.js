import { dataContent } from "./data.js";

let interfaceLanguage = "UA";

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



function buttonNavRender() {
    let navBar = document.getElementById('navBar');

    Object.keys(dataContent[interfaceLanguage]).forEach((element) => {
        let createTeg = document.createElement("button");
        createTeg.className = "navPoint";
        createTeg.textContent = dataContent[interfaceLanguage][element].h1;
        createTeg.onclick = () => openPage(element);

        navBar.appendChild(createTeg);
    })
}
buttonNavRender()

const openPage = (OpenID) => {
    let divContent = document.getElementById("content");
    divContent.innerHTML = "";

    dataContent[interfaceLanguage][OpenID].content.forEach(element => {
        let addElem = Object.keys(element);
        let div = document.createElement("div");
        div.className = "contentItem";

        addElem.forEach(elem => {
            let createTeg = document.createElement(elem);

            elem !== "img" ?
                createTeg.textContent = element[elem] :
                createTeg.src = element[elem];

            div.appendChild(createTeg);
        });

        divContent.appendChild(div);
    });


}
openPage("home");

