const prompt = require ('prompt-sync') ();
   
let consoante = "a, e, i, o, u" 


for (let i = 0; i < 10; i++) {
    let letra = prompt('Digite uma letra: ').toLowerCase();
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log('Vogal');
    } else {
        console.log('Consoante');
    }
}


//professor essa é minha logica mais esqueci como que para e não consegui fazer a repeticao kkkkk