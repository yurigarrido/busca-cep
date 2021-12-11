/// <reference types="cypress" />

describe('home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  describe('verifica se contem os textos da página home', () => {
    it('Verfifica o nome do site.', () => {
      cy.title().should('be.equal', 'BuscaCEP')
    })
    it('Verifica o titulo da página', () => {
      cy.get('h2').should('contain', 'Bem vindo ao BuscadorCEP!')
    })
    it('Verifica o sub-titulo da página', () => {
      cy.get('h4').should('contain', 'o aplicativo BuscadorCEP! permite que você encontre códigos e endereços postais (CEP).')
    })
    it('Verifica a descrição presente no site', () => {
      cy.get('.sc-bdvvtL > :nth-child(1) > :nth-child(3)').should('contain', 'Se você já tiver o CEP em mãos e gostaria de buscar seu endereço')
    })
    it('Verifica a mensagen carismatica no fim do container', () => {
      cy.get('.sc-bdvvtL > :nth-child(1) > :nth-child(4)').should('have.text', 'Aproveite! =D')
    })
  })
  describe('verifica se contem os componentes da página home', () => {
    it('Verfifica header está visivel.', () => {
      cy.get('.sc-pVTFL').should('contain', 'Buscar CEP')
    })
    it('Verifica o body da pagina', () => {
      cy.get('.sc-dkPtRN').should('contain', 'Bem vindo ao BuscadorCEP!')
    })
    it('Verifica se  o footer da página está visivel', () => {
      cy.get('.sc-dkPtRN').should('contain', 'BuscadorCEP!')
    })
  })
  describe('verifica se a rota muda', () => {
    it('Verfifica a rota ao clicar no link Buscar Endereço.', () => {
      cy.get('[href="/buscarEndereco"]').click()
        cy.location().should((loc) => {
          expect(loc.pathname).eq('/buscarEndereco')
    })
  })
    it('Verfifica a rota ao clicar no botão Buscar Endereço.', () => {
      cy.get('span > :nth-child(1)').click()
        cy.location().should((loc) => {
          expect(loc.pathname).eq('/buscarEndereco')
      })
    })
    it('Verfifica a rota ao clicar no botão Buscar CEP.', () => {
      cy.get('span > :nth-child(2)').click()
        cy.location().should((loc) => {
          expect(loc.pathname).eq('/buscarCep')
      })
    })
    it('Verfifica a rota ao clicar no link Buscar CEP.', () => {
      cy.get('[href="/buscarCep"]').click()
        cy.location().should((loc) => {
          expect(loc.pathname).eq('/buscarCep')
      })
    })
  })
})