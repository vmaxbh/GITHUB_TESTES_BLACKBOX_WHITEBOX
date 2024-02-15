Funcionalidade: Criando um novo repositório

  Cenário: Acessando área de criação de repositório
    Given que estou na página inicial do GitHub
    When eu criar um novo repositório
    And a área de criação de repositório é acessada com sucesso
    And campo de Descrição é confirmado na interface
    And flag de repositório público é identificada na tela
    And flag de repositório privado é identificada na tela
    And flag de inicializar automaticamente este repositório com um README é identificada na tela
    And flag de Adicionar .gitignore: Nenhum é identificada na tela
    And flag de Escolher uma licença: Nenhuma é identificada na tela
    Then botão de Criar repositório é identificado na tela

  Cenário: Confirmando cabeçalho para criação de repositório
    Given que estou na página inicial do GitHub
    When eu acesso a área de criação de repositório
    And o componente de cabeçalho para novo repositório é confirmado
    And campo de Pesquisa é confirmado
    And campo de atalho para criação de novo repositório é confirmado
    Then campo de Notificações é confirmado
