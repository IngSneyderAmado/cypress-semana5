describe('Eliminar tag', () => {
    it('Se elimina un tag desde el inicio de sesión hasta la finalización de la eliminación', () => {
      cy.visit('http://localhost:2368/ghost')
      cy.wait(2000)
      cy.get('input[name="identification"]').type('pruebasautomatizadas@uniandes.edu.co')
      cy.wait(2000)
      cy.get('input[name="password"]').type('pruebasautomatizadas')
      cy.wait(2000)
      cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.get('a[href="#/tags/"]').click()
      cy.wait(2000)
      cy.get('a[href="#/tags/new/"]').click()
      cy.wait(2000)
      cy.get('#tag-name').type('Tag')
      cy.wait(2000)
      cy.get('#tag-description').type('Se elimina un tag de prueba para validar la funcionalidad')
      cy.wait(2000)
      cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.get('a[href="#/tags/"][data-cypress-el="true"]').click()
      cy.wait(2000)
      cy.get("h3.gh-tag-list-name").contains("Tag").should('exist');
      cy.wait(2000)
      cy.contains('h3', 'Tag').click()
      cy.wait(5000)
      cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click()
      cy.wait(2000)
      cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click()
      cy.wait(2000)
    })
  })