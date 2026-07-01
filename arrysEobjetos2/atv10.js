const prompt = require ('prompt-sync') ();

let site1 = {}
site1.dominio = "oloko.com"
site1.tamanhoOcupadoGB = 10

let site2 = {}
site2.tamanhoOcupadoGB = parseFloat(prompt(" qual é o tamanho do Gigabytes?: "))
site2.dominio = prompt (" qual é o nome do dominio?: ")

let servidor = {}
servidor.nome = 'Servidor Lucas'
servidor.capacidadeMaximaGigabytes = 500
servidor.sitesHospedados = [site1]

let total = site1.tamanhoOcupadoGB + site2.tamanhoOcupadoGB

if (total <= servidor.capacidadeMaximaGigabytes ) {
    servidor.sitesHospedados [1] = site2
    console.log(" Upload Concluído! Sistema Operacional ")


}else {
    servidor.alertaSobrecarga = true
console.log (" Falha: Falta de Espaço Físico. Cancele o deploy ")

}

console.log (servidor)