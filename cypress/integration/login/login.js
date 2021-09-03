describe('Probando el login', () => {
    const email = "zxc@gmail.com";
    const password = "12345";
    const username = "zxc zcx";

    it('Realizando login exitoso', () => {
        cy.visit('/');
        cy.get(".login").click();
        cy.fixture('home').then( home => {
            cy.get(home.login).click();
        });
        cy.fixture('login').then( login => {
            cy.get(login.email).type(email);
            cy.get(login.password).type(password);
            cy.get(login.signInButton).click();            
        });
        cy.fixture('myAccount').then( myAccount => {
            cy.get(myAccount.myUser).should('contain', username);
        })

    });

});