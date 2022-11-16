import { beforeEach } from "vitest"

describe('empty spec', () => {
  beforeEach( () => {
    cy.visit('http://127.0.0.1:5173/')
  })
  it('passes', () => {
    cy.get('input').type(2)
    cy.get('#textarea1').type('ana\npana\nmana')
    cy.get('#agrupar').click()
    cy.get('#result').contains("Grupo 1: ana,pana \n Queda sin Grupo: mana")
  })

  it('passes without participants', () => {
    cy.get('input').type(3)
    cy.get('#agrupar').click()
    cy.get('#result').contains("")
  })
})