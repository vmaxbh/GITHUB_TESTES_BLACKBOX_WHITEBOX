Cypress.Commands.add('login', (username = 'USERNAME', password = 'PASSWORD') => {
    cy.visit('/').log('URl acessada!')
    cy.get('div.width-lg-auto > :nth-child(2) > .d-inline-block').click().log('Botão para acesso a pagina de Login clicado!')
    cy.get('#login_field').type(Cypress.env(username)).log('Usuário incluído no campo de username!')
    cy.get('#password').type(Cypress.env(password)).log('Senha Incluída no campo de password!')
    cy.get('.position-relative > .btn').click().log('Botão de acessar Clicado!')
});

Cypress.Commands.add('loginCaminhoFeliz', (username = 'USERNAME', password = 'PASSWORD') => {
    cy.visit('/').log('URl acessada!')
    cy.get('div.width-lg-auto > :nth-child(2) > .d-inline-block').click().log('Botão para acesso a pagina de Login clicado!')
    cy.get('#login_field').type(Cypress.env(username)).log('Usuário incluído no campo de username!')
    cy.get('#password').type(Cypress.env(password)).log('Senha Incluída no campo de password!')
    cy.get('.position-relative > .btn').click().log('Botão de acessar Clicado!')
    cy.get('.AppHeader-context-item-label').should('exist').log('Componente confirmado na tela após etapa de Login!')
});

Cypress.Commands.add('loginUsuárioInválido', (username = 'USERNAME', password = 'PASSWORD') => {
    cy.visit('/').log('URl acessada!')
    cy.get('div.width-lg-auto > :nth-child(2) > .d-inline-block').click().log('Botão para acesso a pagina de Login clicado!')
    cy.get('#login_field').type('usernameinvalido').log('Usuário Inválido incluído no campo de username!')
    cy.get('#password').type(Cypress.env(password)).log('Senha Incluída no campo de password!')
    cy.get('.position-relative > .btn').click().log('Botão de acessar Clicado!')
    cy.get('.js-flash-alert').should('contain', 'Incorrect username or password.').log('Alert de Erro validado com sucesso!')
    
});

Cypress.Commands.add('loginSenhaInvalida', (username = 'USERNAME', password = 'PASSWORD') => {
    cy.visit('/').log('URl acessada!')
    cy.get('div.width-lg-auto > :nth-child(2) > .d-inline-block').click().log('Botão para acesso a pagina de Login clicado!')
    cy.get('#login_field').type(Cypress.env(username)).log('Usuário Inválido incluído no campo de username!')
    cy.get('#password').type('senhaInvalida').log('Senha Incluída no campo de password!')
    cy.get('.position-relative > .btn').click().log('Botão de acessar Clicado!')
    cy.get('.js-flash-alert').should('contain', 'Incorrect username or password.').log('Alert de Erro validado com sucesso!')
    
});
