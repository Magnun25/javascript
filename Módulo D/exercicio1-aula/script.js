function carregar() {
    var msg = document.getElementById(`msg`)
    var foto = document.getElementById(`foto`)
    var imagem = document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        imagem.src = `manha.png`
        document.body.style.background = `#fbd894`
    } else if (hora >= 12 && hora < 18){
        imagem.src = `tarde.png`
        document.body.style.background = `#c54f11`
    } else {
        imagem.src = `noite.png`
        document.body.style.background = `#37383a`
    }
}
