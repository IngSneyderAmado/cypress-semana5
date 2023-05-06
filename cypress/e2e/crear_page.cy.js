import { faker } from '@faker-js/faker';

let pageData = {
    title: faker.name.findName(),
    description: faker.name.findName()
}

describe('Crear page publicado', () => {
    it('Se crea una page publicada - se valida que este en la lista', () => {
      
        //Given I navigate to page "http://localhost:2368/ghost"  
        cy.visit('http://localhost:2368/ghost')
        cy.wait(5000)
      
        //When I enter email "<Usuario1>"
        cy.get('#ember7').type('juandacalji@gmail.com')
      
        //And I enter password "<Password1>"
        cy.get('#ember10').type('1q2w3e4r5t6y7u8i9o')
      
        //And I click next
        cy.get('#ember12').click()
        cy.wait(5000)
    
        //And I click Pages menu
        cy.get("a[href='#/pages/']").click();
        cy.wait(2000)

        //And I click in New page 
        cy.get("a[href='#/editor/page/']").click();
        cy.wait(2000)

        //And I write in page title "Title"
        cy.get('.gh-editor-title.ember-text-area').type(pageData.title);
        cy.get('.koenig-editor__editor-wrapper').type(pageData.description);
     
        //And I click in Publish button And I wait for 6 seconds
        cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
        cy.wait(6000);

        //And I click Schedule button And I wait for 6 seconds
        cy.get('.gh-publishmenu-footer .gh-publishmenu-button').click();
        cy.wait(6000);

        //And I get back to page list I wait for 2 seconds
        cy.get("a[href='#/pages/']").click();
        cy.wait(6000);

        //Then I check Page with title "$$name_1" is in the list 
        cy.get("h3.gh-content-entry-title").contains(pageData.title).should('exist');

        });

    })
  
