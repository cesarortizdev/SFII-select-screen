"use strict";
exports.__esModule = true;
exports.Character = void 0;
var flag_1 = require("./flag");
var Character = /** @class */ (function () {
    function Character(name, country) {
        this.files_path = "../../assets/characters";
        this.name = name;
        this.selected_file = this.files_path + "/selected/" + name + ".png";
        this.portrait_file = this.files_path + "/portraits/" + name + ".png";
        this.flag = new flag_1.Flag(country);
    }
    return Character;
}());
exports.Character = Character;
//# sourceMappingURL=character.js.map