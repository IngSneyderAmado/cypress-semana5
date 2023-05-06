describe('Crear tag', () => {
  it('Se crea un tag desde el inicio de sesión hasta la finalización de la creación', () => {
    cy.visit('http://localhost:2368/ghost')
    cy.wait(5000)
    cy.get('#ember7').type('pruebasautomatizadas@uniandes.edu.co')
    cy.wait(5000)
    cy.get('#ember10').type('pruebasautomatizadas')
    cy.get('#ember12').click()
    cy.wait(5000)
  })
})