"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CharactersGrid = void 0;
var character_1 = require("../models/character");
var characters_json_1 = __importDefault(require("../../constants/characters.json"));
var CharactersGrid = /** @class */ (function () {
    function CharactersGrid() {
        this.charactersArray = [];
    }
    CharactersGrid.prototype.call = function () {
        this.initializeCharacters();
    };
    CharactersGrid.prototype.initializeCharacters = function () {
        var _this = this;
        characters_json_1["default"].forEach(function (element) {
            _this.charactersArray.push(new character_1.Character(element.name, element.country));
        });
    };
    return CharactersGrid;
}());
exports.CharactersGrid = CharactersGrid;
//# sourceMappingURL=characters_grid.js.map