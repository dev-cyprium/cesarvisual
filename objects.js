class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

Color.GREEN = new Color(130, 199, 165);
Color.LIGHTGREEN = new Color(130, 199, 199);
Color.DARK  = new Color(27, 33, 44);
Color.BLUE  = new Color(1,69,172);

class TextSquare {
  constructor(x, y, text, color = new Color(130, 199, 165)) {
    this.text = text;
    this.size = TextSquare.SIZE;
    this.textSize = 20;
    this.x = x;
    this.y = y;
    this.offsetY = 7;
    this.color = color;
    this.easing = 0.05;
    this.targetX = null;
    this.maxSpeed = 11; // MUST be ODD!!
    this.onFinishMove = null;
    this.origin = x;
  }

  draw(p) {
    p.fill(this.color.r, this.color.g, this.color.b);

    p.noStroke();
    p.rect(this.x, this.y, this.size, this.size)//, 7);
    
    p.fill(255);
    p.textSize(this.textSize);
    p.text(this.text, 
      this.x + this.size / 2 - p.textWidth(this.text) / 2, 
      this.y + this.size / 2 + this.offsetY);
  }
}

TextSquare.SIZE = 50;