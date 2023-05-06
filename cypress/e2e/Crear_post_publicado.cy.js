import { faker } from '@faker-js/faker';

let postData = {
    title: faker.name.findName(),
    description: faker.name.findName()
}

describe('Crear post publicado', () => {


    it('Se crea un post publicado - se valida que este en la lista', () => {
      
        //Given I navigate to page "http://localhost:2368/ghost"  
        cy.visit('http://localhost:2368/ghost')
        cy.wait(5000)
      
        //When I enter email "<Usuario1>"
        cy.get('#ember7').type('lacz83@hotmail.com')
      
        //And I enter password "<Password1>"
        cy.get('#ember10').type('Oracle6537')
      
        //And I click next
        cy.get('#ember12').click()
        cy.wait(5000)
    
        //And I click Posts menu
        cy.get(".gh-nav-list-new > a[href='#/posts/']").click();
        cy.wait(2000)

        //And I click in New post 
        cy.get('.gh-nav-new-post').click();
        cy.wait(2000)

        //And I write in post title "$name_1"
        cy.get('.gh-editor-title').type(postData.title);
        cy.get('.koenig-editor__editor').type(postData.description);
     
        //And I click in Publish button And I wait for 6 seconds
        cy.get('.gh-publishmenu').click();
        cy.wait(6000);

        //And I click Schedule button And I wait for 6 seconds
        cy.get('.gh-publishmenu-button').click();
        cy.wait(6000);

        //And I click in Cancel button And I wait for 2 seconds
        cy.get('.gh-btn.gh-btn-outline.gh-btn-link').click();
        cy.wait(6000);
    
        //And I click in Posts And  I wait for 2 seconds
        cy.get('.blue.link.fw4.flex.items-center.ember-view').click();
        cy.wait(2000);

        //And I click published posts menu And I wait for 5 seconds
        cy.get("a[href='#/posts/?type=published']").click();
        cy.wait(5000);

        //Then I check Post with title "$$name_1" is in the list 
        cy.get("h3.gh-content-entry-title").contains(postData.title).should('exist');

        });

    })
  
