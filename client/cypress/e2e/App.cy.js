describe('First Test', () => {
  it('Visits the LilyPad Project', () => {
    cy.visit('http://localhost:3000/')
  })

  it('finds the content "Home"', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Lilypad')
    cy.contains('Home')
    cy.contains('Frogs').click()
    cy.url().should('include', '/frogs')
  })
})
describe('404 Test', () => {
  it('Visits the 404 site', () => {
    cy.visit('http://localhost:3000/aioscoj')
  })


})

describe('Login Test', () => {
  it('Visits the LilyPad Project', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Goes to Frog-in and actually frog-in', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Frog-In').click()
    cy.url().should('include', '/signlog')
    cy.contains('Throg').click()
  })
})

describe('Post Test', () => {

  it('Goes to Frog-in and actually frog-in as Throg', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Frog-In').click()
    cy.url().should('include', '/signlog')
    cy.contains('Throg').click()
    cy.contains('Frogs').click()
    cy.url().should('include', '/frogs')
    cy.contains('Hot Toady').click()
    cy.contains('Home').click()
    cy.get('#comment').type('🌹🌹🌹 Edinburgh 🌹🌹🌹')
    cy.get('#picture').type('https://images.unsplash.com/photo-1506377585622-bedcbb027afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')
    cy.contains('Ribbit').click()
    
  })


})