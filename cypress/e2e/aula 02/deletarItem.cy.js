import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Deletar itens na lista toDo', () => {
    beforeEach(() => {
        cy.visit('/')
         var todoItens = ["Diego", "Jessica", "Murilo", "Miguel"]
        todoItens.forEach(function (item, indice, array) {
            telaInicial.inputText(item)
        })
    })

    /**
    * clicar no Filtro
    * o item ser exibido
    *  * e o contador deve bater a informação
  */
    it('deleção de um item da lista', () => {
        telaInicial.deletarItem()
    })
})