let stepX = 27.0;
let stepY = 23.5;

for (s = -10; s < 10; s++) {
    for (i = -1; i < 10; i++) {
        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute(
            "d",
            `M ${Boolean(s % 2) ? i * stepX + 13.5 : i * stepX
            } ${s * stepY} l 13 7.5 l 0 15 l -13.0 7.5 l -13 -7.5 l 0 -15 Z`
        );
        // path.setAttribute(
        //     "fill",
        //     `url(img/bodyBackround.jpg)`
        // );
        document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "svg")[0].appendChild(path);
    }
}
