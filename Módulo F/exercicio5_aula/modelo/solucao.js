let valores = []
let res = document.querySelector('div#res')
let tabSel = document.querySelector('select#tabsel')
let num = document.querySelector('input#num')

function isNumber(n) {
    if (Number(n) < 1 || Number(n) > 100) {
        return false
    } else {
        return true
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
    
}

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        let newValue = Number(num.value)
        valores.push(newValue)
        let newElement = document.createElement('option')
        newElement.text = `Valor ${newValue} adicionado.`
        tabSel.appendChild(newElement)
    } else {
        window.alert('Número inválido ou já utilizado!')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ``
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }

        let media = soma / valores.length

        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${total} número(s) cadastrado(s).</p>`
        res.innerHTML += `<p>O maior valor cadastrado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor cadastrado é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores cadastrados é ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores cadastrados é ${media}.</p>`




}
}