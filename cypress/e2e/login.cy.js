describe('Cenário Login', () => {
      
  it('Fluxos de Login', () => {
    cy.login()
  });
  it('Login Caminho Feliz', () => {
    cy.loginCaminhoFeliz()
  });

  it('Login Usuário Inválido', () => {
    cy.loginUsuárioInválido()
  });
  it('Login Senha Inválida', () => {
    cy.loginSenhaInvalida()
    
  });
 
})