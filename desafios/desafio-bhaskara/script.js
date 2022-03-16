function calcular() {
    var txta = window.prompt(`Qual é o valor de a?`)
    var txtb = window.prompt(`Qual é o valor de b?`)
    var txtc = window.prompt(`Qual é o valor de c?`)
    var res = document.querySelector('section#res')
    var a = Number(txta)
    var b = Number(txtb)
    var c = Number(txtc)
    var delta = b**2 - 4*a*c
    res.innerHTML = `<p id="destaque">Resolvendo Bhaskara</p>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>∆ = ${b}² - 4 . ${a} . ${c}</strong> </p>`
    res.innerHTML += `<p>O valor calculado foi <mark><strong>∆ = ${delta}</strong></mark></p>`
}