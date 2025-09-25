import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Concluir itens  na lista', () => {
    beforeEach(() => {
        cy.visit('/')
         var todoItens = ["Diego", "Jessica", "Murilo", "Miguel"]
        todoItens.forEach(function (item, indice, array) {
            telaInicial.inputText(item)
        })
    })
    it('Concluir um item da lista de toDo', () => {
        telaInicial.concluirItem()
    })
})