import { Flag } from "./flag";

export class Character {
  name: string;
  selected_file: string;
  portrait_file: string;
  flag: Flag;

  files_path: string = "../../assets/characters";

  constructor(name: string, country: string) {
    this.name = name;
    this.selected_file = this.files_path + "/selected/" + name + ".png";
    this.portrait_file = this.files_path + "/portraits/" + name + ".png";
    this.flag = new Flag(country);
  }
}
