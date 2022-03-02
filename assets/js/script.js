const listaOpcoes = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")

listaOpcoes.addEventListener("click", identificarOpcoes)

function identificarOpcoes(event) {
    const li = event.target 
    
    if (li.tagName == "LI") {
        console.log(li.id)
    }
}