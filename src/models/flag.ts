export class Flag {
  name: string;
  file: string;
  //coordX: number;
  //coordY: number;

  constructor(
    name: string
    //coordX: number,
    //coordY: number
  ) {
    this.name = name;
    this.file = "../../asseets/flags" + name + ".png";
    //this.coordX = coordX;
    //this.coordY = coordY;
  }
}
