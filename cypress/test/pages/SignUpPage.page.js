class SignUpPage{
    submitButton() {
        return cy.get('[type="submit"]>span').contains('SIGN UP').first()
    }
    emailField() {
        return cy.get('#email')
    }
    fullNameField() {
        return cy.get('#full_name')
    }
    passwordField() {
        return cy.get('#password')
    }
    agreeButton() {
        return cy.get('#terms_and_conditions')
    }
    submitTextMessage() {
        return cy.get('div[class]>p[class]')
    }
    applyPromoCodeButton() {
        return cy.get('a[aria-hidden]>span')
    }
    promoCodeField() {
        return cy.get('#promo_code')
    }
    enterEmailFieldValue(Email) {
        this.emailField().type(Email, { force: true })
    }
    checkEmailFieldForMachingValue(Email) {
        this.emailField().should('have.value', Email)
    }
    enterFullNameFieldValue(Name) {
        this.fullNameField().type(Name)
    }
    enterPasswordFieldValue(Password) {
        this.passwordField().type(Password)
    }
    clickAgreeButton() {
        this.agreeButton().click()
    }
    clickSubmitButton() {
        this.submitButton().click()
    }
    checkSubmitTextMessageVisibility() {
        for(let i=0; i>2; i++) {
            this.submitTextMessage().eq(i).should('be.visible')
        }
    }
    clickApplyPromoCodeButton() {
        this.applyPromoCodeButton().click()
    }
    enterPromoCodeFieldValue(Number) {
        this.promoCodeField().type(Number)
    }
}

module.exports = new SignUpPage()