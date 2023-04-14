class Figura{
    constructor(posX, posY, width, height, estilo, context) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.estilo = estilo;
        this.context = context;
    }

    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }

    setPosX(x) {
        this.posX = x;
    }
    setPosY(y) {
        this.posY = y;
    }

    mover(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }

    detecta(clickX, clickY) {
    }
    draw() {
    }
}