describe('Cenário Repositório ', () => {
    beforeEach(() => {
        cy.login()
    });

    it('Confirmando campos internos da área de criação de Repositórios', () => {
        cy.createRepository()
        
    });

    it('Confirmando campos cabeçalho área de criação de Repositórios', () => {
        cy.ConfirmHeaderCreate()
        
    });
    
});