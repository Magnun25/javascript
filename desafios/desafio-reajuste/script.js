
function reajustar() {
    var nome = window.prompt(`Qual é o nome do funcionário?`)
    var txtsalario = window.prompt(`Qual é o salário de ${nome}`)
    var percent = window.prompt(`O Salário de ${nome} vai ser reajustado em qual porcentagem?`)
    var salario = Number(txtsalario)
    var reajuste = salario*percent/100
    var salfinal = salario+reajuste
    var res = document.querySelector('section#res')
    res.innerHTML = `<p id='destaque'>${nome} recebeu um aumento salarial!</p>`
    res.innerHTML += `<p>O Salário atual era ${salario.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}.</p>`
    res.innerHTML += `<p>Com um aumento de ${percent}%, o salário vai aumentar ${reajuste.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${salfinal.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})}.</p>`
}