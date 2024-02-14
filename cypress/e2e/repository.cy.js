describe('Cenário Repositório ', () => {
    beforeEach(() => {
        cy.login()
    });

    it('Criando Repositório', () => {
        cy.createRepository()
        cy.ConfirmFieldsCreate()
        
    });

  
    
});