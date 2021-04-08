function contar(){

    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    // Validação não pode haver Zero em todos campos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerText ='Impossível contar!'
        alert('[ERRO] Faltam dados')
        
    }else {
        res.innerHTML = 'Contando: <br> '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        // Contador (c) começará no inicio (i) e enquanto o c for menor ou igual o fim (f) o c irá receber ele mesmo mais o passo (p).
        if (i < f) {
            // Contagem crescente
            for(var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449} `
        }
        }   else {
            // Contagem decrescente
                for ( var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }    
        }      
        res.innerHTML += `\u{1F3C1}`
     }
}