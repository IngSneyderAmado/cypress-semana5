import { faker } from '@faker-js/faker';
import configJson from '../../config/config.json'

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
        cy.get('#ember7').type(configJson.user)
      
        //And I enter password "<Password1>"
        cy.get('#ember10').type(configJson.password)
      
        //And I click next
        cy.get('#ember12').click()
        cy.wait(5000)
    
        //And I click Pages menu
        cy.get("a[href='#/pages/']").click();
        cy.wait(2000)

        //And I click in New page 
        cy.get(".view-actions a[href='#/editor/page/']").click();
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

        //And I select the page with title "$$name_1" And I wait for 2 seconds
        cy.get("h3.gh-content-entry-title").contains(pageData.title).click()
        cy.wait(2000);

        //And I delete the post And I wait for 5 seconds   
        cy.get("button.post-settings").click();
        cy.get("button.settings-menu-delete-button").click();
        cy.wait(5000);

        //And I click confirm delete page And I wait for 2 seconds
        cy.get(".modal-content > .modal-footer > .gh-btn-red").click();
        cy.wait(2000);

        //Then I check page with title "$$name_1" is not in the list
        cy.get("h3.gh-content-entry-title").contains(pageData.title).should('not.exist');

        });

    })
  
