class StatusBar extends MoveableObject {
  IMAGES_HP = [
    "img/statusbar/0.png",
    "img/statusbar/20.png",
    "img/statusbar/40.png",
    "img/statusbar/60.png",
    "img/statusbar/80.png",
    "img/statusbar/100.png",
  ];

  IMAGES_THROW = [
    'img/3_statusbar_bottle/blue/0.png',
    'img/3_statusbar_bottle/blue/20.png',
    'img/3_statusbar_bottle/blue/40.png',
    'img/3_statusbar_bottle/blue/60.png',
    'img/3_statusbar_bottle/blue/80.png',
    'img/3_statusbar_bottle/blue/100.png',
  ];

  IMAGES_COIN = [
    'img/1_statusbar_coin/blue/0.png',
    'img/1_statusbar_coin/blue/20.png',
    'img/1_statusbar_coin/blue/40.png',
    'img/1_statusbar_coin/blue/60.png',
    'img/1_statusbar_coin/blue/80.png',
    'img/1_statusbar_coin/blue/100.png',
  ];

  percentage = 100;
  images = []; // Das Array, das die aktuellen Bilder enthält

  constructor(type = "HP", y = 0) {
    super();
    this.x = 20;
    this.y = y;
    this.width = 200;
    this.height = 60;

    // Lade die Bilder basierend auf dem Typ
    this.loadImagesForType(type);
    this.setPercentage(100); // Setze das Bild entsprechend des Anfangsprozentsatzes
  }

  loadImagesForType(type) {
    // Basierend auf dem Typ die richtigen Bilder laden
    if (type === "HP") {
      this.images = this.IMAGES_HP;
    } else if (type === "THROW") {
      this.images = this.IMAGES_THROW;
    } else if (type === "COIN") {
      this.images = this.IMAGES_COIN;
      this.percentage = 0;
    }

    this.loadImages(this.images); // Lade die ausgewählten Bilder
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.images[this.resolveImageIndex()]; // Nutze das Array 'images'
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage >= 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
