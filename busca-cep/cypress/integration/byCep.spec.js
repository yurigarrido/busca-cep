/// <reference types="cypress" />

describe('home', () => {
  describe('verifica se contem os textos da página home', () => {
    before(() => {
      cy.visit('http://localhost:3000/buscarEndereco')
    })

    it('Verfifica o nome do site.', () => {
      cy.title().should('be.equal', 'BuscaCEP')
    })
    it('Verfifica se é possivel digitar no campo de cep e se o valor dele é atualizado.', () => {
      cy.get('.sc-hKwDye')
        .clear()
        .type('70276020', { delay: 500})
        .should('have.value', '70276020')
    })
    it('Verfifica se não é possivel digitar letras no campo de cep e se o valor dele é atualizado.', () => {
      cy.get('.sc-hKwDye')
        .clear()
        .type('olá', { delay: 500})
        .should('have.value', '')
    })
  })
  describe('verifica se os componentes estao visiveis', () => {
    before(() => {
      cy.visit('http://localhost:3000/buscarEndereco')
    })

    it('Verfifica se toda a tela está aparecendo.', () => {
      cy.get('#root').should('contain', 'Voltar')
    })
    it('Verfifica se o header está aparecendo.', () => {
      cy.get('.sc-pVTFL').should('contain', 'Buscar Endereço')
    })
    it('Verfifica se o footer está aparecendo.', () => {
      cy.get('.sc-jrQzAO').should('contain', 'BuscadorCEP.')
    })
    it('Verfifica se o constainer principal está aparecendo.', () => {
      cy.get('.sc-dkPtRN').should('contain', 'Home')
    })
    it('Verfifica se o botao de Buscar está aparecendo.', () => {
      cy.get('.sc-bdvvtL > :nth-child(1) > :nth-child(3)').should('contain', 'Buscar')
    })
    it('Verfifica se o botao de Voltar está aparecendo.', () => {
      cy.get('.sc-bdvvtL > :nth-child(1) > :nth-child(4)').should('contain', 'Voltar')
    })
    it('Verfifica se a div com o input está aparecendo.', () => {
      cy.get('.sc-bdvvtL > :nth-child(1)').should('contain', 'CEP')
    })
    it('Verfifica se o input para digitar o cep está aparecendo.', () => {
      cy.get('.sc-bdvvtL > :nth-child(1)').should('contain', 'CEP')
    })
    it('Verfifica se o breadCrumbs está aparecendo.', () => {
      cy.get('.sc-jRQBWg').should('contain', 'Home')
    })
    describe('Verifica se busca os dados corretamente pelo cep', () => {
      before(() => {
        cy.visit('http://localhost:3000/buscarEndereco')
      })
      
      it('Verfifica os dados', () => {
        cy.get('.sc-hKwDye').type('70276020', { delay: 300})
        cy.get('.sc-bdvvtL > :nth-child(1) > :nth-child(3)').click()
        cy.get('.sc-bdvvtL > :nth-child(1) > :nth-child(4)').should('contain', 'Brasília')

      })
      it('Verfifica os dados são limpos apos clicar em Nova Busca', () => {
        cy.get('.sc-hKwDye')
        .clear()  
        .type('70276020', { delay: 300})
        cy.get('.sc-bdvvtL > :nth-child(1) > :nth-child(3)').click()
        cy.get('.sc-bdvvtL > :nth-child(1) > :nth-child(4)').should('contain', 'Brasília')
        cy.get('.sc-bdvvtL > :nth-child(1) > :nth-child(7)').click()
        cy.get('.sc-hKwDye').should('have.value', '')
      })
      it('Verfifica se volta para a pagina Home ao clicar em Voltar', () => {
        cy.get('.sc-bdvvtL > :nth-child(1) > :nth-child(4)').click()
        cy.location().should((loc) => {
          expect(loc.pathname).eq('/')
        })

      })
    })
  })
})
