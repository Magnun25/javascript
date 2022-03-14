function clicou() {
    var aprovado = document.querySelector(`td#aprovado`)
    var reprovado = document.querySelector(`td#reprovado`)
    var recuperacao = document.querySelector(`td#recuperacao`)
    reprovado.style.background = 'white'
    recuperacao.style.background = 'white'
    aprovado.style.background = 'white'
    var nome = window.prompt(`Qual o nome do aluno?`)
    var txtn1 = window.prompt(`Primeira nota de ${nome}`)
    var txtn2 = window.prompt(`Segunda nota de ${nome}`)
    var n1 = Number(txtn1)
    var n2 = Number(txtn2)
    var media = (n1+n2)/2
    var res = document.querySelector('section#res')
    res.innerHTML = `<p>O aluno(a) ${nome} obteve uma média final de <strong>${media}</strong>.</p>`
    if (media < 3) {
        res.innerHTML += `<p>${nome} está <strong>Reprovado</strong>!</p>`
        reprovado.style.background = 'lightred'
    } else if (media >= 3 && media <=6){
        res.innerHTML += `<p>${nome} está em <strong>Recuperação</strong>!</p>`
        recuperacao.style.background = 'lightyellow'
    } else {
        res.innerHTML += `<p>${nome} está <strong>Aprovado</strong>!</p>`
        aprovado.style.background = 'lightgreen'
    }
    // Coloquei style para treinar como fazer isso. Não fazia parte do desafio.

}