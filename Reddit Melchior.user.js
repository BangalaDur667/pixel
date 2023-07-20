// ==UserScript==
// @name         Reddit Melchior
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  On va récuperer ce qui nous est du de droit.
// @author       Adcoss95
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://raw.githubusercontent.com/BangalaDur667/pixel/main/3x.png
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/BangalaDur667/pixel/main/3x.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 112px;height: 112px;";
            console.log(i);
            return i;
        })())

    }, false);

}