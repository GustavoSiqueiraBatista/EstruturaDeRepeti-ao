let nomePiloto = prompt ("Qual o seu nome?")
let velocity = 0
let velocity2 = prompt ("Em Qual Velocidade Deseja Iniciar?")
let confirm2 = confirm ("Confirma a Velocidade? " + velocity2)

if (confirm2) {
    velocity = velocity2
}

if ( velocity <= 0) {
    alert ("Nave Parada")
} else if (velocity <= 40) {
    alert ("Nave Esta Muito Lenta")
} else if (velocity <= 80) {
    alert ("Velocidade Estavel")
}else if (velocity <= 100) {
    alert ("Velocidade Alta Diminua")
}else if (velocity <= 120) {
    alert ("Velocidade Extrema Entrando Em Estado Critico")
}else {
    alert ("Voce Esta Morto!")
}

alert ("Nome: " + nomePiloto + "\nVelocidade: " + velocity2)