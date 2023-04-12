class SapportPage{
    headerTitleText() {
        return cy.get('.header__headline')
    }
    checkSupportCenterPageUrl() {
        cy.url().should('eq','https://support.telnyx.com/en/')
    }
    checkHeaderTitleTextVisibility() {
        this.headerTitleText().should('be.visible')
    }
}

module.exports = new SapportPage()