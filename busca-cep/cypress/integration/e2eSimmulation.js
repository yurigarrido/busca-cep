/// <reference types="cypress" />

describe('testando como usuário', () => {
  it('Abre a aplicação', () => {
    cy.visit('http://localhost:3000/')
    // verfica se está na pagina inicial
    cy.get('span > :nth-child(1)').should('contain','Buscar')
  })
  it('Abre a aplicação', () => {
    cy.visit('http://localhost:3000/')
    cy.get('span > :nth-child(1)').click()
    // apos clicar no botão verifica se o endereço da aplicacao muda
        cy.location().should((loc) => {
          expect(loc.pathname).eq('/buscarEndereco')
  })
})
  it('digita um cep no input', () => {
    cy.get('.sc-hKwDye').type('73255904', { delay: 500})
    //clica no botao de Buscar
    cy.get('.sc-bdvvtL > :nth-child(1) > :nth-child(3)').click()
    // consegue ver o endereço na tela
    cy.get('.sc-bdvvtL > :nth-child(1) > :nth-child(4)').should('contain', 'Brasília')
})
})