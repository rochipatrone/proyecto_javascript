let iconos = []

let selecciones = []

generarTablero()



 function cargarIconos() {
    iconos = [
            '<img src="./img/ataud.png" alt="">',
            '<img src="./img/bruja.png" alt="">',
            '<img src="./img/calabaza.png" alt="">',
            '<img src="./img/calavera.png" alt="">',
            '<img src="./img/cementerio.png" alt="">',
            '<img src="./img/cuchillo.png" alt="">',
            '<img src="./img/fantasma.png" alt="">',
            '<img src="./img/frankestein.png" alt="">',
            '<img src="./img/momia.png" alt="">',
            '<img src="./img/murcielago.png" alt="">',
            '<img src="./img/vudu.png" alt="">',
            '<img src="./img/araña.png" alt="">',
        
    ]
} 

function generarTablero() {
    cargarIconos()
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for(let i = 0 ; i < 24 ; i++ ) {
        tarjetas.push (`
        <div class="areaTarjeta" onclick="seleccionarTarjeta(${i})">
        <div class="tarjeta" id="tarjeta${i}">
            <div class="parte atras" id="atras${i}">
            ${iconos[0]}
            </div>
            <div class="parte delante">
                <img src="./img/signo pregunta.png" alt="">
            </div>
        </div>
    </div>`)
    if(i % 2 == 1) {
        iconos.splice(0, 1)
    }
    }
    tarjetas.sort(() => Math.random() -0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if(tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if(selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {

        let atras1 = document.getElementById("atras" + selecciones[0])
        let atras2 = document.getElementById("atras" + selecciones[1])
        if(atras1.innerHTML != atras2.innerHTML){
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        } else {
            atras1.style.background = "plum"
            atras2.style.background = "plum"
        }

    }, 1000)
}






