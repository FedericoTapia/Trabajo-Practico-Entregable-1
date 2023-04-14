class Ellipse extends Figura {
    constructor(posX, posY, width, height, estilo, context) {
        super(posX, posY, width, height, estilo, context);
    }

    draw() {
        this.context.fillStyle = this.estilo;
        this.context.beginPath();
        this.context.ellipse(this.posX, this.posY, this.width / 2, this.height / 2, 0, 0, 2 * Math.PI);
        this.context.fill();
    }

    detecta(clickX, clickY) {
        let dX = clickX - this.posX;
        let dY = clickY - this.posY;
        let rX = this.width / 2;
        let rY = this.height / 2;
        if (((dX * dX) / (rX * rX) + (dY * dY) / (rY * rY)) <= 1) {
            return true;
        }
        else {
            return false;
        }
    }
}