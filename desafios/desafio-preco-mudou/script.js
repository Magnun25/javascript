function verificar() {
    var txtanterior = window.prompt(`Qual era o preço anterior do produto?`)
    var txtatual = window.prompt(`Qual é o preço atual do produto?`)
    var res = document.querySelector('section#res')
    var anterior = Number(txtanterior)
    var atual = Number(txtatual)
    var change = atual - anterior
    var porcent = (change*100)/anterior
    
    
    res.innerHTML = `<p id="destaque">Analisando os valores informados</p>`
    res.innerHTML += `<p>O produto custava ${anterior.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'})} e agora custa ${atual.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'})}.</p>`
    if (anterior < atual) {
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        res.innerHTML += `<p>O preço subiu ${change.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de  ${porcent}% pra cima.</p>`
    } else if (anterior == atual) {
        res.innerHTML += `<p>Hoje o produto manteve o preço.</p>`
    } else {
        var change = (-1)*change
        var porcent = (-1)*porcent
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu ${change.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${porcent}% pra baixo.</p>`
    }

    
    
    
    
}