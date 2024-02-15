// Importa a biblioteca faker para gerar dados fictícios
// Importa a biblioteca faker para gerar dados fictícios
import { faker } from '@faker-js/faker';

// Gera dois nomes completos aleatórios usando a biblioteca faker e os concatena com um underscore
const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomFullName = `${randomFirstName}_${randomLastName}`


Cypress.Commands.add('createRepository', () => {
    cy.iframe('[data-target="loading-context.details"] > .Details > .js-repos-container > .f4 > .Button--primary > .Button-content').should('be.visible').click()
    cy.get('.Heading__StyledHeading-sc-1c1dgg0-0').should('exist').log('Área de criação de repositório acessada com Sucesso!')
    cy.get('.enACkX > :nth-child(3) > ._VisuallyHidden__VisuallyHidden-sc-11jhm7a-0').should('exist').log('Campo de Description Confirmado na Interface!')
    cy.get(':nth-child(1) > .hZnBBv > ._VisuallyHidden__VisuallyHidden-sc-11jhm7a-0').should('exist').log('Flag de repositorio publico identificado na tela!')
    cy.get('.CheckboxOrRadioGroup__Body-sc-1t4rdk-0 > :nth-child(2) > .hZnBBv > ._VisuallyHidden__VisuallyHidden-sc-11jhm7a-0').should('exist').log('Flag de repositorio privado identificado na tela!')
    cy.get('.hnmzXm > .hZnBBv > ._VisuallyHidden__VisuallyHidden-sc-11jhm7a-0').should('exist').log('Flag de criação automatica do README identificado na tela!')
    cy.get(':nth-child(1) > :nth-child(2) > ._VisuallyHidden__VisuallyHidden-sc-11jhm7a-0').should('exist').log('Flag de criação automatica do Gitginore identificado na tela!')
    cy.get('.fpuoiY > :nth-child(1) > :nth-child(3) > ._VisuallyHidden__VisuallyHidden-sc-11jhm7a-0').should('exist').log('Flag de criação licença identificado na tela!')
    cy.get('.aBKvw > .types__StyledButton-sc-ws60qy-0 > .Box-sc-g0xbh4-0 > span').should('exist').log('Botão de Criar Repositório identificado na tela!')
});

Cypress.Commands.add('ConfirmHeaderCreate', () => {
    cy.get('[data-target="loading-context.details"] > .Details > .js-repos-container > .f4 > .Button--primary > .Button-content').should('be.visible').click()
    cy.get('.AppHeader-context-item-label').should('exist').log('Confirmado componente de cabeçalho de novo repositório!')
    cy.get('.search-input-container > .AppHeader-button').should('exist').log('Confirmado campo de Pesquisa!')
    cy.get('#global-create-menu-button').should('exist').log('Confirmado campo de atalho para criação de novo repositorio!')
    cy.get('#AppHeader-notifications-button').should('exist').log('Confirmado campo de Notificações com Sucesso!')
});

