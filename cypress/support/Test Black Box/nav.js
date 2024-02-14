Cypress.Commands.add('navSidebarProfile', () => {
    cy.get('.Button-label > .avatar').click().log('Botão Sidebar clicado com Sucesso!')
    cy.contains('span[data-view-component="true"].ActionListItem-label', 'Your profile').click().log('Campo PErfil Clicado com Sucesso!');
    cy.get('.AppHeader-context-item-label').should('exist').log('Componente de tela de Perfil confirmado com Sucesso!')
});

Cypress.Commands.add('navRepository', () => {
    cy.get('#repositories-tab').click().log('Aba de Repositório acessada com Sucesso!')
    cy.get('.text-center').should('exist').log('Componete da área de Repositório confirmado na tela!')

});

Cypress.Commands.add('navProjects', () => {
    cy.get('#projects-tab').click().log('Aba Projects Acessada com sucesso!')
    cy.get('.blankslate-heading').should('exist').log('Componente da aba de Projects confirmado na tela!')

});

Cypress.Commands.add('navSettings', () => {
    cy.get('.Button-label > .avatar').click().log('Botão Sidebar clicado com Sucesso!')
    cy.contains('Settings').click().log('Botão Settings clicado com Sucesso!')
    cy.get('#public-profile-heading').should('exist').log('Componete da tela de Settings confirmado com Sucesso!')
    cy.wait(1)

});

Cypress.Commands.add('navSettingsEmail', () => {
    cy.contains('Emails').click().log('Area de Configuração de e-mail acessada com Sucesso!')
    cy.get('.css-truncate-target').should('contain', 'maxwell.viana@elogroup.com.br').log('E-mail confirmado com sucesso no campo de Configuração de e-mail!')


});
Cypress.Commands.add('navGithubSuport', () => {
    cy.get('.Button-label > .avatar').click().log('Botão Sidebar clicado com Sucesso!')
    cy.contains('GitHub Support').click().log('Botão de Suporte Clicado com Sucesso!')
    cy.get('.h1').should('contain', 'Olá, @maxwellelogroup. Com o que podemos ajudar?').log('Componente e mensagem confirmado na interface da área de Suporte com Sucesso!')

    
});

Cypress.Commands.add('navGithubDocs', () => {
    cy.get('.Button-label > .avatar').click().log('Botão Sidebar clicado com Sucesso!')
    cy.contains('GitHub Docs').click().log('Botão da área de Docs Clicado com Sucesso!')
    cy.get('#title-h1').should('contain', 'GitHub Docs').log('Componente e mensagem confirmado na interface da área de Docs com Sucesso!')

});

Cypress.Commands.add('navYourStars', () => {
    cy.get('.Button-label > .avatar').click().log('Botão Sidebar clicado com Sucesso!')
    cy.contains('Your stars').click().log('Botão da área de Your Stars com Sucesso!')
    cy.get('.blankslate-spacious > .mb-1').should('contain', 'Create your first list').log('Componente e mensagem confirmado na interface da área de Your Stars com Sucesso!')

});

