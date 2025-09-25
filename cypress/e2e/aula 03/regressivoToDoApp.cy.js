
import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Regressivo ToDo App', () => {

    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        })
        it('Validar a area label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?")

        })
    })

    context('Validar a adição de itens', () => {
        beforeEach(() => {
            cy.visit('/')
        })
        it('Adicionar mais de um item a lista de toDo', () => {
            var todoItens = ["Diego", "Jessica", "Murilo", "Miguel"]
            todoItens.forEach(function (item, indice, array) {
                telaInicial.inputText(item)
            })

            telaInicial.validarContador(4)
        })

    })

    context('Validar a conclusão de itens', () => {
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Diego", "Jessica", "Murilo", "Miguel"]
            todoItens.forEach(function (item, indice, array) {
                telaInicial.inputText(item)
            })
        })
        it('Concluir um item da lista de toDo', () => {
            telaInicial.concluirItem()
            telaInicial.validarContador(3)
        })
    })

    context('Validar o filtro da aplicação', () => {
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Diego", "Jessica", "Murilo", "Miguel"]
            todoItens.forEach(function (item, indice, array) {
                telaInicial.inputText(item)
            })
            telaInicial.concluirItem()
        })
        it('Filtrar itens ativos', () => {
                telaInicial.filtrarItem('Active')
                telaInicial.validarSizeToDo(3)
            })
              it('Filtrar itens concluidos', () => {
                 telaInicial.filtrarItem('Completed')
                  telaInicial.validarSizeToDo(1)
            })

    })

    context('Validar a remoção de itens', () => {
        beforeEach(() => {
                cy.visit('/')
                 var todoItens = ["Diego", "Jessica", "Murilo", "Miguel"]
                todoItens.forEach(function (item, indice, array) {
                    telaInicial.inputText(item)
                })
            })
                it('deleção de um item da lista', () => {
                    telaInicial.deletarItem()
                    telaInicial.validarSizeToDo(3)
                })
    })

})