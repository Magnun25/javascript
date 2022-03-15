function verificar() {
    var txtano = window.prompt(`Qual é o ano que você quer verificar?`)
    var ano = Number(txtano)
    var res = document.querySelector('section#res')
    if (ano % 4 == 0 ) {
        res.innerHTML = `<p id="destaque">Analisando o ano de ${ano}...</p>`
        res.innerHTML += `O ano de ${ano} <span id="e">É BISSEXTO</span> &#x2705`
    } else {
        res.innerHTML = `<p id="destaque">Analisando o ano de ${ano}...</p>`
        res.innerHTML += `O ano de ${ano} <span id="naoe">NÃO É BISSEXTO</span> &#x274C`
    }
}