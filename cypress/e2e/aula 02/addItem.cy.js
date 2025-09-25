import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar itens na lista', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Adicionar um item na minha lista de toDo', () => {
        telaInicial.inputText("dado1")
        telaInicial.inputText("dado2")
        telaInicial.inputText("dado3")
        telaInicial.inputText("dado4")
    })
    it('Adicionar mais de um item a lista de toDo', () => {
        var todoItens = ["Diego", "Jessica", "Murilo", "Miguel"]
        todoItens.forEach(function (item, indice, array) {
            telaInicial.inputText(item)
        })
    })
})