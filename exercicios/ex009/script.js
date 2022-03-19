let somador = 0
let cont = document.querySelector('section#cont')
function somar() {
    somador ++
    cont.innerHTML = `<p>O contador está com <mark>${somador}</mark> cliques.</p>`
}
function zerar() {
    somador = 0
    cont.innerHTML = `<p>O contador está com <mark>${somador}</mark> cliques.</p>`
}