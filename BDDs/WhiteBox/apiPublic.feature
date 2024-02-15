Feature: Testes de API do GitHub

  Scenário: Obtendo uma lista de emojis
    Given que estou realizando testes na API pública do GitHub
    When eu obtenho uma lista de emojis
    Then a resposta é um objeto não vazio

  Scenário: Obtendo uma lista de repositórios públicos para um usuário
    Given que estou realizando testes na API pública do GitHub
    When eu obtenho uma lista de repositórios públicos para um usuário específico
    Then a resposta é uma lista de repositórios onde todos são públicos

  Scenário: Obtendo uma lista de gists públicos
    Given que estou realizando testes na API pública do GitHub
    When eu obtenho uma lista de gists públicos
    Then a resposta é uma lista de gists

  Scenário: Buscando usuários
    Given que estou realizando testes na API pública do GitHub
    When eu busco por usuários com uma determinada consulta
    Then a resposta contém uma propriedade "items" que é uma lista de usuários

  Scenário: Buscando repositórios
    Given que estou realizando testes na API pública do GitHub
    When eu busco por repositórios com uma determinada consulta
    Then a resposta contém uma propriedade "items" que é uma lista de repositórios

  Scenário: Buscando tópicos
    Given que estou realizando testes na API pública do GitHub
    When eu busco por tópicos com uma determinada consulta
    Then a resposta é um objeto não vazio

  Scenário: Obtendo uma lista de eventos
    Given que estou realizando testes na API pública do GitHub
    When eu obtenho uma lista de eventos
    Then a resposta é uma lista de eventos

  Scenário: Obtendo uma lista de feeds
    Given que estou realizando testes na API pública do GitHub
    When eu obtenho uma lista de feeds
    Then a resposta é um objeto não vazio

  Scenário: Obtendo uma lista de seguidores para um usuário
    Given que estou realizando testes na API pública do GitHub
    When eu obtenho uma lista de seguidores para um usuário específico
    Then a resposta é uma lista de seguidores

  Scenário: Obtendo uma lista de usuários seguidos por um usuário
    Given que estou realizando testes na API pública do GitHub
    When eu obtenho uma lista de usuários seguidos por um usuário específico
    Then a resposta é uma lista de usuários seguidos

  Scenário: Obtendo uma lista de gists para um usuário
    Given que estou realizando testes na API pública do GitHub
    When eu obtenho uma lista de gists para um usuário específico
    Then a resposta é uma lista de gists

  Scenário: Obtendo uma lista de issues para um repositório
    Given que estou realizando testes na API pública do GitHub
    When eu obtenho uma lista de issues para um repositório específico
    Then a resposta é uma lista de issues

