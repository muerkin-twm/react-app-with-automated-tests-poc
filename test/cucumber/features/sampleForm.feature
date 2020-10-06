Feature: Sample Form
    As a user
    I can submit the form

    Scenario: User can submit the form
        Given the user is on the sample form page
        And the api is ready
        When the user enters email and password, and submit
        Then the user should see an alert box