Feature: Bill payment

  Scenario: Valid bill payment
    Given I am on the ParaBank bill payment page
    When I fill in the payee data 
        And I fill in the address data
        And I fill in the account data
        And I fill in the amount
        And I submit the bill payment form
    Then I should see a successfull payment message

  Scenario: The account numbers do not match
    Given I am on the ParaBank bill payment page
    When I fill in the payee data 
        And I fill in the address data
        And I fill in the wrong account data
        And I fill in the amount
        And I submit the bill payment form
    Then I should see a not-matching account numbers error message

  Scenario: Empty amount field error
    Given I am on the ParaBank bill payment page
    When I fill in the payee data 
        And I fill in the address data
        And I fill in the account data
        And I submit the bill payment form
    Then I should see an empty amount field error message