import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Acessar a página do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    telaInicial.inputText()
  })
})