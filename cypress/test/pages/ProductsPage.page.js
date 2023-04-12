class ProductsPage{
    contactUsButton() {
        return cy.get('p>a[href="/contact-us"]')
    }
    productsText() {
        return cy.get('h1[class]>span')
    }
    communicationsWindow() {
        return cy.get('#communications').first()
    }
    wirelessWindowVisibility() {
        return cy.get('#wireless').first()
    }
    networkingWindowVisibility() {
        return cy.get('#networking').first()
    }
    storageWindowVisibility() {
        return cy.get('#storage').first()
    }
    clickContactUsButton() {
       this.contactUsButton().click()
    }
    checkProductsTextVisibility() {
        this.productsText().should('be.visible')
    }
    checkCommunicationsWindowVisibility() {
        this.communicationsWindow().should('be.visible')
    }
    checkWirelessWindowVisibility() {
        this.wirelessWindowVisibility().should('be.visible')
    }
    checkNetworkingWindowVisibility() {
        this.networkingWindowVisibility().should('be.visible')
    }
    checkStorageWindowVisibility() {
       this.storageWindowVisibility().should('be.visible')
    }
}

module.exports = new ProductsPage()