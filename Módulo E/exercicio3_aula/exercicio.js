function contar() {
    let starttxt = document.querySelector('input#start')
    let endtxt = document.querySelector('input#end')
    let steptxt = document.querySelector('input#step')
    let res = document.querySelector('div#res')
    let start = Number(starttxt.value)
    let end = Number(endtxt.value)
    let step = Number(steptxt.value)
    if (step <= 0) {
        window.alert(`PASSO invalido!, considerando PASSO = 1`)
        step = 1
    } 
    if ( starttxt.value.length == 0 || endtxt.value.length == 0 || steptxt.value.length == 0) {
        window.alert(`ERRO!! Faltam dados.`)
    } else {
        res.innerHTML = `Contando: <br>`
        if (start <= end) {
            for (let i = start; i <= end; i += step) {
                res.innerHTML += `${i} &#x1F449`
            }
        } else {
            for (let j = start; j >= end; j -= step) {
                res.innerHTML += `${j} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3F4}`
    }
    
}
console.log(step)
//     if ( starttxt.value.length == 0 || endtxt.value.length == 0 || steptxt.value.length == 0) {
//         window.alert(`ERRO!! Faltam dados.`)
//     } else {
//         if (start <= end) {
//             for (let i = start; i <= end; i += step) {
//                 res.innerHTML += `${i} &#x1F449`
//             }
//         } else {
//             for (let j = start; j >= end; j -= step) {
//                 res.innerHTML += `${j} \u{1F449}`
//             }
//         }
//         res.innerHTML += `\u{1F3F4}`
//     }
// }