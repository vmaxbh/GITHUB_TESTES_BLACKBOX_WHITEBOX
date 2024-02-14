describe('Cenário Login', () => {
      
  it('Fluxos de Login', () => {
    cy.login()
  });
  it('Login Usuário Inválido', () => {
    cy.loginUsuárioInválido()
  });
  it('Login Senha Inválida', () => {
    cy.loginSenhaInvalida()
    
  });
 
})