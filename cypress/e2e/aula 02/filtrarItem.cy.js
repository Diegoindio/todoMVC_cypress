import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Validar os filtros da aplicação após adição de itens na lista toDo', () => {
    beforeEach(() => {
        cy.visit('/')
         var todoItens = ["Diego", "Jessica", "Murilo", "Miguel"]
        todoItens.forEach(function (item, indice, array) {
            telaInicial.inputText(item)
        })
        telaInicial.concluirItem()
    })

    /**
    * clicar no Filtro
    * o item ser exibido
    *  * e o contador deve bater a informação
  */
    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItem('Active')
    })
      it('Filtrar itens concluidos', () => {
         telaInicial.filtrarItem('Completed')
    })
})