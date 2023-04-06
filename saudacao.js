function mostrarSaudacao() {
    let horaAtual = new Date().getHours();
    if (horaAtual >= 8 && horaAtual < 12) {
        console.log("Bom dia!")
    } else if (horaAtual >= 12 && horaAtual < 18) {
        console.log("Boa tarde!")
    } else if (horaAtual >= 18 && horaAtual < 22) {
        console.log("Boa noite!")
    } else {
        console.log("Vai dormir vagabundo")
    }
}