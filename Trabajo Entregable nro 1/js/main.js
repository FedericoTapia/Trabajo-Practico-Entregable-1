window.onload = function () {

    /**@type {HTMLCanvasElement}*/

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    let figuras = [];
    let figuraActual = null;

    const cantFiguras = Math.round(Math.random()*(21)+1);

    crearFiguras();
    function crearFiguras(){
        for (let i = 0; i < cantFiguras; i++) {
            let seleccion = Math.floor(Math.random() * (3 - 1) + 1);
            if(seleccion == 1){
                let rect = new Rectangulo(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * (200 - 20) + 20, Math.random() * (200 - 20) + 20, colorRandom(), ctx);
                figuras.push(rect);
            }
            else if(seleccion == 2){
                let ellipse = new Ellipse(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * (200 - 20) + 20, Math.random() * (200 - 20) + 20, colorRandom(), ctx);
                figuras.push(ellipse);
            }
            
        }
    }

    function colorRandom(){
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let a = 1;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    dibujar();
    function dibujar() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        for (let i = 0; i < figuras.length; i++) {
            figuras[i].draw();
        }
    }

    //DETECCION DE CLICK EN LAS FIGURAS
    canvas.addEventListener('mousedown', function (e) {
        for (let i = 0; i < figuras.length; i++) {
            if (figuras[i].detecta(e.clientX, e.clientY) == true) {
                figuraActual = figuras[i];
                console.log("SE DETECTO EL CLICK :)");
            }
        }
    });

    //MOVER FIGURA CON MOUSE
    canvas.addEventListener('mousemove', function (e) {
        if (figuraActual != null) {
            figuraActual.mover(e.clientX, e.clientY);
        }
        dibujar();
    });

    //MOVER CON TECLADO
    window.addEventListener("keydown", function (event) {
        if (figuraActual != null) {
            if (event.key === "ArrowUp") {
                figuraActual.setPosY(figuraActual.getPosY() - 10);
            }
            if (event.key === "ArrowDown") {
                figuraActual.setPosY(figuraActual.getPosY() + 10);
            }
            if (event.key === "ArrowLeft") {
                figuraActual.setPosX(figuraActual.getPosX() - 10);
            }
            if (event.key === "ArrowRight") {
                figuraActual.setPosX(figuraActual.getPosX() + 10);
            }
            dibujar();
        }
    });

    //SOLTAR FIGURA
    canvas.addEventListener('mouseup', function (e) {
        figuraActual = null;
    });
}
