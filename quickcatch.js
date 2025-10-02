// ==UserScript==
// @name         [Pokeclicker] Instant Pokéball Catch
// @namespace    Pokeclicker Scripts
// @author       osnium
// @description  Sets catchTime of all Pokéballs to 0 when the game loads
// @version      1.0.0
// @match        https://www.pokeclicker.com/
// @icon         https://www.google.com/s2/favicons?domain=pokeclicker.com
// @grant        unsafeWindow
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function setCatchTimes() {
        try {
            const balls = App.game.pokeballs.pokeballs;
            balls.forEach(ball => {
                ball.catchTime = 0;
            });
            console.log("[Instant Pokéball Catch] All catch times set to 0");
        } catch (e) {
            console.error("[Instant Pokéball Catch] Failed to set catch times:", e);
        }
    }

    // Wait until the game is ready
    const checkReady = setInterval(() => {
        if (typeof App !== "undefined" && App.game?.pokeballs?.pokeballs?.length) {
            clearInterval(checkReady);
            setCatchTimes();
        }
    }, 500);
})();
