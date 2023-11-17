Feature: Login on Parabank

  Scenario: Successfull login
    Given I log in with the correct data
    When I am on the ParaBank login page
    When I log in with the correct data
    Then I should be successfully logged in

  Scenario: Empty credentials login fail
    Given I log in with the correct data
    When I am on the ParaBank login page
    When I submit the credentials
    Then I should see an empty credentials error