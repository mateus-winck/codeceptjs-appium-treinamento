Feature: Login
  Eu como usuario
  Gostaria de fazer Login
  Para acessar o sistema

  Scenario: Login com sucesso
    Given I fill email
    And i fill password
    When i tap on Entrar
    Then i see the Salvar
