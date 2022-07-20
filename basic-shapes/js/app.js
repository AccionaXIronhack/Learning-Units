const game = {
    description: 'Canvas app for basic shapes drawing',
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setDimensions(canvasId)
    },
    setDimensions(canvasId) {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },
    drawRectangles() {
        this.ctx.fillRect(50, 50, 100, 50);
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(150, 100, 100, 50);

        this.ctx.strokeStyle = 'green'
        this.ctx.lineWidth = 10
        this.ctx.strokeRect(100, 100, 500, 500)
    },
    drawLines() {
        this.ctx.beginPath() // Inicio camino
        this.ctx.strokeStyle = 'black' // Color de la línea
        this.ctx.lineWidth = 1 // Ancho de la línea
        this.ctx.moveTo(100, 100) // Punto inicial de la línea
        this.ctx.lineTo(500, 500) // Punto final de la línea
        this.ctx.stroke() // Dibujamos
        this.ctx.closePath() // Cierro camino

        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = 'yellow'

        this.ctx.beginPath()
        this.ctx.moveTo(600, 0)
        this.ctx.lineTo(300, 900)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawTriangles() {
        this.ctx.beginPath()
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = "pink"
        // this.ctx.fillStyle = "pink"
        this.ctx.moveTo(200, 60);
        this.ctx.lineTo(420, 300);
        this.ctx.lineTo(200, 300);
        this.ctx.lineTo(200, 60);
        this.ctx.stroke();
        // ctx.fill();
        this.ctx.closePath()
    },
    drawDashedLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'grey'

        this.ctx.beginPath()
        this.ctx.setLineDash([6, 10])
        this.ctx.moveTo(800, 0)
        this.ctx.lineTo(800, 900)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawText(text, x, y, color) {
        this.ctx.fillStyle = color
        this.ctx.font = '30px arial'
        this.ctx.fillText(text, x, y)
    },
    drawArc() {
        this.ctx.strokeStyle = 'green'
        this.ctx.lineWidth = 6
        this.ctx.fillStyle = 'red'
        this.ctx.arc(700, 700, 30, 0, Math.PI * 2)
        this.ctx.stroke()
        // ctx.fill()
    },
    drawImage(imageSrc) {
        const image = new Image(); // Creamos imagen
        image.src = imageSrc // Elegimos la imagen - Ruta relativa desde index.html

        image.onload = () => {
            this.ctx.drawImage(image, 50, 50, 300, 300); // Cuando se carge la dibujamos
        }
    }
}