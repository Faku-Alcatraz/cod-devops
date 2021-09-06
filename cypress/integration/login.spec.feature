Feature: Login

  I want to do a login

  Scenario: Login exitoso
    Given Estoy en la pagina principal
    When Hago click en Sign In
    And Uso los datos predefinidos
    And Hago click en el boton Sign in
    Then Veo la pantalla principal de mi cuenta
