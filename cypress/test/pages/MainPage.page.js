class MainPage{
    
    contactUsButton() {
        return cy.get('[href="/contact-us"]').first()
    }
    productsDropdown() {
        return cy.get('span').contains('Products').first()
    }
    seeAllProductsButton() {
        return cy.get('span').contains('See all products').first()
    }
    emailField() {
        return cy.get('#email')
    }
    budySignUpButton() {
        return cy.get('button>span').contains('Sign up').first()
    }
    headerSignUpButton() {
        return cy.get('[id="header-sign-up"]')
    }
    signInButton() {
        return cy.get('a[rel]').contains('Log in ').first()
    }
    clickProductsDropdown() {
       this.productsDropdown().click()
    }
    clickSeeAllProductsButton() {
        this.seeAllProductsButton().click()
    }
    clickContactUsButton() {
        this.contactUsButton().click()
    }
    enterEmailFieldValue(Email) {
        this.emailField().type(Email)
    }
    scrollToEmailField() {
        this.emailField().scrollIntoView()
    }
    clickBudySignUpButton() {
        this.budySignUpButton().click()
    }
    clickHeaderSignUpButton() {
        this.headerSignUpButton().click()
    }
    clickSignInButton() {
        this.signInButton().invoke('removeAttr', 'target').click()
    }
}

module.exports = new MainPage()