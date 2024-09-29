class Bottle extends Collectible {
  x;
  y;
  width = 20;
  height = 30;

  constructor(x, y) {
    super()
    this.loadImage("img/explosiv/PNG_2048x1536/Weapons/weapon_14_molotov_cocktail.png");
    this.x = x;
    this.y = y;
  }
}
