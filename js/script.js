const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const nuvem = document.querySelector('.nuvens')

const pular = () => {
    mario.classList.add('pular')

    setTimeout(() => {
        mario.classList.remove('pular')
    },  500)
}


const loop = setInterval( verificarPosicao  , 10)

function verificarPosicao(){
    const pipePosicao = pipe.offsetLeft
    const nuvemPosicao = nuvem.offsetLeft 
    


    // usando o window para pegar a posição do mário, pois nao existe offsetbottom
    // getComputedstyle pega a posição em um string '123px', e o replate é usado para tirar o px da string
    // o sinal de + antes do window é para converter em Number de forma mais fácil
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '')
   

    if (pipePosicao <= 50  && pipePosicao > 0 && marioPosicao < 42){
        
        nuvem.style.animation = 'none'
        nuvem.style.left  = `${nuvemPosicao}px`

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosicao}px`

        mario.style.animation = 'none'
        mario.style.bottom  = `${marioPosicao}px`

        

        mario.src = './assets/game-over.png'
        mario.style.width = '25px'
        mario.style.marginLeft = '20px'

        clearInterval(loop) 
    }
}

document.addEventListener('keydown', pular)
document.addEventListener('touchstart', pular);