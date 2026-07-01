function mediana(numeros) {
                numeros.sort((a, b) => a - b );

    if (numeros.length % 2 == 0 ) {
        mediana = numeros [numeros.length /2] + numeros[(numeros.length /2) - 1] 
        return mediana
    }else if(numeros == "" ) {
       console.log (" Sua calculadora deu erro")
    }else{
             mediana = numeros[Math.floor (numeros.length /2) ]
    }
            
}
    
export default mediana







    








