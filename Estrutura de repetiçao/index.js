let nomeNave = prompt("Qual o nome da nave?")
let novoNome = ""
let qlMudança = prompt ("Qual Letra Deseja mudar?")
let nvLetra = prompt ("Qual a nova letra?")


for(let i = 0; i < nomeNave.length; i++) {
    if (nomeNave[i] == qlMudança) {
        novoNome += nvLetra
      } else {
        novoNome += nomeNave[i]
      }
}
alert(novoNome)