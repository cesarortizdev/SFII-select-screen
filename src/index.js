"use strict";
exports.__esModule = true;
var characters_grid_1 = require("./views/characters_grid");
var Main = /** @class */ (function () {
    function Main() {
        new characters_grid_1.CharactersGrid();
    }
    Main.prototype.start = function () {
        console.log("Selecciona tu personaje");
    };
    return Main;
}());
var selectScreen = new Main();
selectScreen.start();
//# sourceMappingURL=index.js.map