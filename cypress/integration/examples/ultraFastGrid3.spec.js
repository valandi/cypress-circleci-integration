describe("AppTest3", () => {
    it(`ultraFastTest3`, function () {
        // Navigate to the url we want to test
        // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
        // but then change the above URL to https://demo.applitools.com/index_v2.html
        // (for the 2nd run)
        cy.visit('https://www.google.com');

        // Call Open on eyes to initialize a test session
        const randomUUID = Cypress._.random(0,1e6);
        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Demo App 3- Cypress',
            testName: 'Smoke Test 3- Cypress'
        })

        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.eyesCheckWindow({
            tag: "Login Window",
            target: 'window',
            fully: true
        });


        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });
});
