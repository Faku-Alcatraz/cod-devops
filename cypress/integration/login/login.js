const email = "zxc@gmail.com";
const password = "12345";
const username = "zxc zcx";


Given("Estoy en la pagina principal", () => {
  cy.visit("/");
});

When("Hago click en Sign In", () => {
    cy.get(".login").click();
    cy.fixture("home").then((home) => {
        cy.get(home.login).click();
    });
});

And("Uso los datos predefinidos", () => {
    cy.fixture('login').then( login => {
        cy.get(login.email).type(email);
        cy.get(login.password).type(password);
    });
});

And("Hago click en el boton Sign in", () => {
    cy.fixture('login').then( login => {
        cy.get(login.signInButton).click();
    });
});

Then("Veo la pantalla principal de mi cuenta", () => {
    cy.fixture('myAccount').then( myAccount => {
        cy.get(myAccount.myUser).should('contain', username);
    })
});
