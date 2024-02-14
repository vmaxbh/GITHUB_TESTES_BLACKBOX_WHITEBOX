describe('Cenário Navegação Sidebar ', () => {
    beforeEach(() => {
        cy.login()
    });

    it('Perfil', () => {
        cy.navSidebarProfile()
        cy.navRepository()
        cy.navProjects()
    });

    it('Configurações', () => {
        cy.navSettings()
        cy.navSettingsEmail()
    });

    it('Github Suporte', () => {
        cy.navGithubSuport()
    });

    it('Github Docs', () => {
        cy.navGithubDocs()
    });

    it('Your Stars', () => {
        cy.navYourStars()
    });

  
    
});