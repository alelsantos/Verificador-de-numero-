function contar() {
    let ini = document.getElementById('tag-inicio')
    let fim = document.getElementById('tag-fim')
    let passo = document.getElementById('tag-passo')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       // window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido!  Considerando PASSO 1')
            p = 1
        }
        // alert('TUDO OK!')
        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
                   } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}\u{1F449}`
            }
        }
        res.innerHTML += `${c} \u{1F3C1}`
    }
}