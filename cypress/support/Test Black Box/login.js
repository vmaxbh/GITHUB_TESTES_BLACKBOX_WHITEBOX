Cypress.Commands.add('login', (username = 'USERNAME', password = 'PASSWORD') => {
    cy.visit('/').log('URL acessada!');
    cy.get('div.width-lg-auto > :nth-child(2) > .d-inline-block').click().log('Botão para acesso à página de Login clicado!');
    cy.get('#login_field').should('be.visible').type(Cypress.env(username)).should('have.value', Cypress.env(username)).log('Usuário incluído no campo de username!');
    cy.get('#password').should('be.visible').type(Cypress.env(password)).should('have.value', Cypress.env(password)).log('Senha incluída no campo de password!');
    cy.get('.position-relative > .btn').click().log('Botão de acessar clicado!');
    cy.wait(5000); // Aumente o tempo de espera para   1000ms para dar tempo suficiente para a página processar
    cy.get('.AppHeader-context-item-label', { timeout:   10000 }).should('contain', 'Dashboard');
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

