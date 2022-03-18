function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var ano = document.getElementById(`ano`)
    var res = document.querySelector(`div#container-2`)
    if (ano.value.length == 0 || Number(ano.value) > anoatual) {
        window.alert(`[ERRO] Verifique os dados novamente!`)
    } else {
        var idade = anoatual - Number(ano.value)
        var fsex = document.getElementsByName('sex') 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = '' 
        if (fsex[0].checked) {
           genero = `Homem`
           if (idade <= 10) {
                img.setAttribute('src', 'menino.png')
           } else if (idade > 10 && idade < 18) {
                img.setAttribute('src', 'jovem-h.png')
           } else if (idade >=18 && idade < 60) {
                img.setAttribute('src', 'homem.png')
           } else if (idade > 60) {
                img.setAttribute('src', 'idoso.png')
           }
        } else if(fsex[1].checked) {
           genero = `Mulher`
           if (idade <= 10) {
            img.setAttribute('src', 'menina.png')
            } else if (idade > 10 && idade < 18) {
            img.setAttribute('src', 'jovem-m.png')
            } else if (idade >=18 && idade < 60) {
            img.setAttribute('src', 'mulher.png')
            } else if (idade > 60) {
            img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `<p>Foi detectado ${genero} de ${idade} anos.</p>`
        res.appendChild(img)
    }

}