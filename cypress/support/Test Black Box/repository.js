// Importa a biblioteca faker para gerar dados fictícios
import { faker } from '@faker-js/faker';

// Gera um nome completo aleatório usando a biblioteca faker
const randomName = faker.person.fullName();


Cypress.Commands.add('createRepository', () => {
    cy.get('#repository\\[name\\]').type(randomName).log('Nome Aleatório gerado pelo Faker inserido no campo com Sucesso!')
    cy.get(':nth-child(2) > .flex-self-start').click().log('Botão para gerar repositório clicado com sucesso!')
    cy.get(':nth-child(2) > .AppHeader-context-item > .AppHeader-context-item-label').should('exist').log('Componente de Interface com nome de repositírio gerado confirmado a existencia na interface!')
});

Cypress.Commands.add('ConfirmFieldsCreate', () => {
    cy.get('#empty-setup-clone-url').should('exist').log('Campo de url de repositório Confirmado!')
    cy.get('.mb-4 > .height-full').should('exist').log('Campo para configuração do GitHub Copilot Confirmado!')
    cy.get(':nth-child(2) > .height-full').should('exist').log('Campo para adicionar colaboradores no repositório GitHub Copilot Confirmado!')
    cy.get('.js-repo-nav').should('exist').log('Campo de cabeçalio para navegação Confirmado!')
});

