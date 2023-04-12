class SignInPage{
    emailField() {
        return cy.get('[name="email"]').first()
    }
    passwordField() {
        return cy.get('[name="password"]').first()
    }
    rememberMyEmailButton() {
        return cy.get('svg[data-icon]')
    }
    logInButton() {
        return cy.get('button[type="submit"][class*="LoginButton"]').contains('Log in')
    }
    errorMesage() {
        return cy.get('div>div>div>span[class]').first()
    }
    enterEmailFieldValue(Email) {
        this.emailField().type(Email)
    }
    enterPasswordFieldValue(Password) {
        this.passwordField().type(Password)
    }
    clickRememberMyEmailButton() {
        this.rememberMyEmailButton().click()
    }
    clickLogInButton() {
        this.logInButton().click()
    }
    checkErrorTextMesageVisibility() {
        this.errorMesage().should('be.visible')
    }
}

module.exports = new SignInPage()