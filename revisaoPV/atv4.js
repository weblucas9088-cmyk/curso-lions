const prompt = require ('prompt-sync') ();

let consoante = {
   
}
do {
    for (let i = 0; i < 10; i++) {
        let letra = prompt('Digite uma letra: ').toLowerCase();
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            console.log('Vogal');
        } else {
            console.log('Consoante');
        }
    }
} while (consoante);
 