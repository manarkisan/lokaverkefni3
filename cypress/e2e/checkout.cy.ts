
import { describe, it } from 'node:test'

describe('checkout flow', () => {
  it('can add a product and place an order', () => {
    cy.visit('/product/08a25347-eb0d-4e12-8952-11dc2c7d3cd3')
    cy.contains('button', 'Add to Cart').click()
    cy.visit('/checkout')
    cy.contains('Crochet Rose').should('exist')
    cy.contains('button', 'Proceed to Checkout').click()
    cy.url().should('include', '/orders')
    cy.contains('Shipping Information').should('exist')
    cy.contains('button', 'Confirm Order').click()
    cy.url().should('include', '/confirmorder')
    cy.contains('The order has been completed.').should('exist')
  })
})