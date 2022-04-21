//Variables para obtener los elementos del DOM

let monsters = ['nvl-1.png','nvl-2.png','nvl-3.png','nvl-4.png','nvl-5.png','nvl-6.png','nvl-7.png','nvl-8.png','nvl-9.png','nvl-10.png','nvl-11.png','nvl-12.png','nvl-13.png','nvl-14.png','nvl-15.png','nvl-16.png',]//lista de los monstruos
let animacionExplosion = document.querySelector('.animacion-explosion');//Campo para ver la animacion de la explosion

//------MONSTRUO----------
let monsterImg = document.getElementById('monster'); //Imagen del monster
let campoHp = document.getElementById('campo-vida-hp');//campo de texto de la vida del monstruo
let camponivelmonster = document.getElementById('nivel-monster');//Campo para ver el nivel del monstruo
let vidaProgreso = document.getElementById('vida-progreso');//Campo para ver el progreso de la vida del monstruo
//------JUGADOR----------
let campomoneda = document.getElementById('campo-moneda');//Campo de texto de las monedas acumuladas del jugador
let campodaño = document.getElementById('campo-daño');//Campo del daño que hace el jugador
let monedaBar = document.getElementById('moneda-bar');//Campo para ver cuantas monedas esta acumulando el jugador
let nivelPlayer = document.getElementById('nivel-player')

//* ---------Creamos la CLASE MONSTER para crear los objeto del enemigo
class Monster {
    constructor(){
        this.vida= 100;
        this.nivel = 1
    };
    reducirVida(reducirVida){ //Metodo para reducir la VIDA del monstruo
        this.vida =this.vida - reducirVida;
    }
    aumentarNivel(){ //Metodo para aumentar el NIVEL del monstruo
        if(this.vida <= 0){
            animacionExplosion.style.display='block';
            animacionExplosion.classList.toggle('animate-explosion');
            monsterImg.style.display = 'none';
            setTimeout(() => {
                animacionExplosion.classList.remove('animate-explosion')
                monsterImg.style.display = 'block';
                this.pintarNivel();
                animacionExplosion.style.display='none';
            }, 1100);
            this.nivel = this.nivel + 1;
            this.vida = this.nivel * 100;
            vidaNum = enemy.vida;
        }
    }
    pintarMonster(){ //Este metodo es para cambiar el monstruo segun su nivel
        if(this.nivel < monsters.length)
        monsterImg.setAttribute('src', `img/${monsters[this.nivel - 1]}`)
    }
    pintarNivel(){ //Metodo para pintar el nivel del monstruo en la pantalla
        camponivelmonster.innerHTML = `<h2>ENEMY LVL ${this.nivel}</h2>`
    }
    pintarHp(){ //Metodo para pintar la vida o hp del monstruo en la pantalla
        campoHp.innerHTML = `${this.vida}`
    }
}
//* ---------Creamos la CLASE PLAYER para crear los objeto del jugador
class Player{
    constructor(){
        this.moneda = 0;
        this.ataque = 10;
        this.nivel = 1;
    }
    aumentarmoneda(){
        this.moneda = this.moneda + 10;
        campomoneda.innerHTML = `${this.moneda}`
    }
    aumentarNivel(){
        if(this.moneda % 100 == 0){
            this.nivel = this.nivel + 1
        }
    }
    aumentarAtaque(){
        campodaño.innerHTML = `${this.ataque}`
        if(this.moneda % 100 == 0){
        this.ataque = this.ataque + 10;
        }
    }
}

let enemy = new Monster();
let jugador = new Player();
let vidaNum = enemy.vida;
let monedaNum = jugador.moneda;
//Actualizar la pantalla constantemente
function actualizar(){
    window.requestAnimationFrame(actualizar);
    enemy.aumentarNivel()
    enemy.pintarMonster()
    enemy.pintarHp();
    vidaProgreso.style.transform = `translateX(-${100-mapear(vidaNum,enemy.vida)}%)`;

}
actualizar()
//Funcion para obtener un porcentaje de un determinado numero
function mapear(numValue, num){
    return (num*100)/numValue
}

//Eventos
monsterImg.addEventListener('click' , ()=>{
    enemy.reducirVida(jugador.ataque)
    enemy.pintarNivel()
    jugador.aumentarmoneda()
    jugador.aumentarNivel()
    jugador.aumentarAtaque();
    console.log('VIDA ENEMIGO: ', enemy.vida, 'NIVEL ENEMIGO: ', enemy.nivel)
})
let bienvenida = document.querySelector('.bienvenida')
let buttonBienvenida = document.getElementById('jugar')

buttonBienvenida.addEventListener('click', ()=>{
    bienvenida.style.left='-100%'
})