
let data = prompt ("Data de inicio (Formato: DD/MM/YYYY")
let data2 = moment(data, "DD/MM/YYYY")
let today = moment()
let dataDif = today - data2
let options = prompt("Escolha O Modo Que Deseja Exibir A Data De Partida?\n 1-Segundos \n 2-Minutos \n 3-Horas \n 4-Dias")
if (options == "1") {
    let seconds = Math.round (dataDif / 1000)
    alert ("Tempo De Voo: " + seconds + " Segundos")
} else if (options == "2") {
    let minutes = Math.round (dataDif / 1000 / 60)
    alert ("Tempo De Voo: " + minutes + " Minutos")
} else if (options == "3") {
    let hours = Math.round (dataDif / 1000 / 3600)
    alert ("Tempo De Voo: " + hours + " Horas")
} else if (options == "4") {
    let days = Math.round (dataDif / 1000 / 24)
    alert ("Tempo De Voo: " + days + " Dias")
} else {
    alert ("Opção Invalida")
}