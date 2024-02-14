describe('Cenário Navegação Sidebar ', () => {
    beforeEach(() => {
        cy.login()
        cy.wait(2)
    });

    it('Perfil', () => {
        cy.navSidebarProfile()
        cy.wait(1)
        cy.navRepository()
        cy.wait(1)
        cy.navProjects()
        cy.wait(1)
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