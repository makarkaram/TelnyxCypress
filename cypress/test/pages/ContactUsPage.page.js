class ContactUsPage{
    firstNameField() {
        return cy.get('#FirstName')
    }
    lastNameField() {
        return cy.get('#LastName')
    }
    emailField() {
        return cy.get('#Email')
    }
    countryDropdown() {
        return cy.get('#Phone_Number_Extension__c')
    }
    reasonForContactDropdown() {
        return cy.get('#Reason_for_Contact__c')
    }
    phoneNumberField() {
        return cy.get('#Phone_Number_Base__c')
    }
    companyWebsiteField() {
        return cy.get('#Website')
    }
    describeYourRequestField() {
        return cy.get('#Form_Additional_Information__c')
    }
    submitButton() {
        return cy.get('[type="Submit"]')
    }
    submitMessageText() {
        return cy.get('h1>span')
    }
    supportCenterButton() {
        return cy.get('p>a[href="https://support.telnyx.com/en/"]')
    }
    howDidYouHearAboutTelnyxField() {
        return cy.get('#How_did_you_hear_about_Telnyx_Open__c')
    }
    errorMesageText() {
        return cy.get('#ValidMsgReason_for_Contact__c')
    }
    logInButton() {
        return cy.get('a[title]').eq(1)
    }
    selectSupportOptionInReasonForContactDropdown() {
        this.reasonForContactDropdown().select('Support')
    }
    enterFirstNameFieldValue(Name) {
        this.firstNameField().type(Name)
    }
    enterLastNameFieldValue(Name) {
        this.lastNameField().type(Name)
    }
    enterEmailFieldValue(Email) {
        this.emailField().type(Email)
    }
    selectCanadaOptionInCountryDropdown() {
        this.countryDropdown().select('Canada (+1)')
    }
    enterPhoneNumberFieldValue(Number) {
        this.phoneNumberField().type(Number)
    }
    enterCompanyWebsiteFieldValue(Website) {
        this.companyWebsiteField().type(Website)
    }
    enterDescribeYourRequestFieldValue(Text) {
        this.describeYourRequestField().type(Text)
    }
    clickSubmitButton() {
        this.submitButton().click()
    }
    checkSubmitMessageTextVisibility() {
        this.submitMessageText().should('have.text', 'Thank you.')
    }
    clickSupportCenterButton() {
        this.supportCenterButton().invoke('removeAttr', 'target').click()
    }
    enterHowDidYouHearAboutTelnyxFieldValue(Text) {
        this.howDidYouHearAboutTelnyxField().type(Text)
    }
    scrollToSupportCenterButton() {
        this.supportCenterButton().scrollIntoView()
    }
    checkErrorMesageTextVisibility() {
        this.errorMesageText().should('be.visible')
    }
    clickLogInButton() {
        this.logInButton().invoke('removeAttr', 'target').click()
    }
    scrollDownToLogInButton() {
        this.logInButton().scrollIntoView()
    }
}

module.exports = new ContactUsPage()