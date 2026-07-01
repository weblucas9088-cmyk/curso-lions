const prompt = require ('prompt-sync') ();

let voo1 = {
    destino: "japao",
    quantidade: 500
}
let voo2 = {
    destino: "china",
    quantidade: 800
}

let perfil = {
    historicoViagens:[voo1,voo2]

}
perfil.nome = prompt(" qual é o seu nome ")

let voou3 = {}
   voou3.destino = prompt( "aonde voce foi na sua terceira viagem" )
   voou3.quantidade = parseFloat(prompt("quantas milhas voce conseguiu"))
perfil.historicoViagens[2] = voou3

let soma = voo1.quantidade + voo2.quantidade + voou3.quantidade

if ( soma>5000 ) {
    soma = soma-5000
    perfil.categoria = "platinum"
    console.log ("parabens") 
}else {

    perfil.categoria = "gold"
    console.log ( 5000 - soma )
}

console.log (perfil)




