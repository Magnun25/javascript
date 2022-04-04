let numbers = []

function adicionar() {
    let numTxt = document.querySelector(`input#num`)
    let num = Number(numTxt.value)
    let res = document.querySelector(`div#res`)
    res.innerHTML = ""
    let array = document.getElementById(`array`)
    let confirm = numbers.indexOf(num)
    
    if (num < 1 || num > 100 || numTxt.value.length == 0 || confirm != -1 ) {
        window.alert(`Número inválido ou já utilizado!`)
        numTxt.value = ""
        numTxt.focus()
    } else if (num >=1 || num <=100) {
        numbers.push(num)
        let item = document.createElement("option")
        item.text = `Valor ${num} adicionado.`
        item.value = `valor${num}`
        array.appendChild(item)
        numTxt.value = ""
        numTxt.focus()
    }
}
function result() {

    numbers.sort()
    let res = document.querySelector(`div#res`)
    let txt1 = document.createElement("p")
    txt1.textContent = `Ao todo, temos ${numbers.length} números cadastrados.`
    res.appendChild(txt1)

    let txt2 = document.createElement("p")
    let maior = numbers.length
    txt2.textContent = `O maior valor informado foi ${numbers[maior -1]}.`
    res.appendChild(txt2)

    let txt3 = document.createElement("p")
    txt3.textContent = `O menor valor informado foi ${numbers[0]}.`
    res.appendChild(txt3)

    let soma = 0
    for (let c = 0; c <= numbers.length - 1; c++ ) {
        soma += numbers[c] 
    }

    let txt4 = document.createElement("p")
    txt4.textContent = `Somando todos os valores temos ${soma}`
    res.appendChild(txt4)

    let media = soma/numbers.length
    let txt5 = document.createElement("p")
    txt5.textContent = `A média dos valores digitados é ${media}`
    res.appendChild(txt5)

    
}
    