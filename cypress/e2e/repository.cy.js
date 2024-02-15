describe('Cenário Repositório ', () => {
    beforeEach(() => {
        cy.login({ timeout:  50000 })
    });

    it('Confirmando campos internos da área de criação de Repositórios', () => {
        cy.createRepository()
        
    });

    it('Confirmando campos cabeçalho área de criação de Repositórios', () => {
        cy.ConfirmHeaderCreate()
        
    });
    
});