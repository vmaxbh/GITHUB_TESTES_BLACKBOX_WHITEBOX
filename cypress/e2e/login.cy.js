describe('Cenário Login', () => {
      
  it('Fluxos de Login', () => {
    cy.login()
    cy.wait(5)
  });
  it('Login Usuário Inválido', () => {
    cy.loginUsuárioInválido()
    cy.wait(5)
  });
  it('Login Senha Inválida', () => {
    cy.loginSenhaInvalida()
    cy.wait(5)
    
  });
 
})