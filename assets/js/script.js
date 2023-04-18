function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = '/assets/img/manhã.png'
        document.body.style.background = '#e3f2ff'
    } else if (hora >= 12 && hora <= 18) {
        img.src = '/assets/img/tarde.png'
        document.body.style.background = '#ff914d'
    } else {
        img.src = '/assets/img/noite.png'
        document.body.style.background = '#545454'
    }
}


