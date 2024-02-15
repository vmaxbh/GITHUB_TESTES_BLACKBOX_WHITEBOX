describe('Cenário Navegação Sidebar ', () => {
    beforeEach(() => {
        cy.login()
        
    });

    it.only('Validações Repositório repTyler-Aufderhar ', () => {
        cy.repTylerAufderharPrivateTrue()
        
    });

    it('Configurações', () => {
        cy.navSettings()
        cy.wait(1)
        cy.navSettingsEmail()
        cy.wait(1)
    });

    it('Github Suporte', () => {
        cy.navGithubSuport()
        cy.wait(1)
    });

    it('Github Docs', () => {
        cy.navGithubDocs()
        cy.wait(1)
    });

    it('Your Stars', () => {
        cy.navYourStars()
        cy.wait(1)
    });

  
    
});