describe('login test',()=>{

    it.skip('test case 1',()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        cy.contains('Log in').click();
        cy.url().should('include','/Account/Logon');
        //assert if log in is visible
        cy.get('.row > .mb-4').should('be.visible');
        
        
        //finding total number of links that is child of li
        //li a ==> means give me all link(a) that is child of li
        //assert total is 34
        
        cy.get('li a').should('have.length',29);
        cy.get("a[href='/Rooms/6'").should('have.length',1);
        cy.get('li').find("a[href='/Rooms/6']").should('have.length',1);
        
   
    })
    it('test',()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        cy.contains('Log in').click();
        //cy.get('li').find("a[href='/Rooms/6']").click();
        cy.get('li').contains("Single").click();

    })
})