Feature: Login no GitHub

  Cenário: Login com credenciais válidas
    Given que estou na página inicial do GitHub
    When eu faço login com um usuário válido
    Then o login é realizado com sucesso

  Cenário: Login com usuário inválido
    Given que estou na página inicial do GitHub
    When eu faço login com um usuário inválido
    Then uma mensagem de erro é exibida informando "Incorrect username or password."

  Cenário: Login com senha inválida
    Given que estou na página inicial do GitHub
    When eu faço login com uma senha inválida
    Then uma mensagem de erro é exibida informando "Incorrect username or password."
