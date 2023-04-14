class Rectangulo extends Figura{
    constructor(posX, posY, width, height, estilo, context) {
        super(posX, posY, width, height, estilo, context);
    }

    draw() {
        this.context.fillStyle = this.estilo;
        this.context.beginPath();
        this.context.rect(this.posX, this.posY, this.width, this.height);
        this.context.fill();
    }

    detecta(clickX, clickY) {
        if (((this.posX < clickX) && (this.width + this.posX > clickX))
            && (this.posY < clickY) && (this.height + this.posY > clickY)) {
            return true;
        }
        else {
            return false;
        }
    }
}
