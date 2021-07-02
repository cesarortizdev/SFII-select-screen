import { Character } from "../models/character";

import charactersJson from "../../constants/characters.json";

export class CharactersGrid {
  charactersArray: Array<Character> = [];

  call() {
    this.initializeCharacters();
  }

  private initializeCharacters() {
    charactersJson.forEach((element: any) => {
      this.charactersArray.push(new Character(element.name, element.country));
    });
  }
}
