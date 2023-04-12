import MainPage from "../pages/MainPage.page"
import SignUpPage from "../pages/SignUpPage.page"
import TextGenerator from "../../Helper/TextGenerator"
import ContactUsPage from "../pages/ContactUsPage.page"
import ProductsPage from "../pages/ProductsPage.page"
import SupportPage from "../pages/SupportPage.page"
import SignInPage from "../pages/SignInPage.page"
import CoockiesPage from "../pages/CoockiesPage.page"

let Name
let Email
let Number
let Website
let Text
let Password

describe('"Telnyx" test', () => {
    beforeEach(() => {
        Name = TextGenerator.randomName()
        Email = TextGenerator.randomEmail()
        Number = TextGenerator.randomNumber()
        Website = TextGenerator.randomWebsite()
        Text = TextGenerator.randomLongText()
        Password = TextGenerator.randomPassword()
        cy.visit("/")
        CoockiesPage.checkSubmitButtomIsDisplayed()
    })
    it('TX_001 Test Contact Us form via Header button with positive scenario', () => {
        MainPage.clickContactUsButton()
        ContactUsPage.selectSupportOptionInReasonForContactDropdown()
        ContactUsPage.enterFirstNameFieldValue(Name)
        ContactUsPage.enterLastNameFieldValue(Name)
        ContactUsPage.enterEmailFieldValue(Email)
        ContactUsPage.selectCanadaOptionInCountryDropdown()
        ContactUsPage.enterPhoneNumberFieldValue(Number)
        ContactUsPage.enterCompanyWebsiteFieldValue(Website)
        ContactUsPage.enterDescribeYourRequestFieldValue(Text)
        ContactUsPage.enterHowDidYouHearAboutTelnyxFieldValue(Text)
        ContactUsPage.clickSubmitButton()
        ContactUsPage.checkSubmitMessageTextVisibility()
    })
    it('TX_002 Test Contact Us form via "Products" page with positive scenario', () => {
        MainPage.clickProductsDropdown()
        MainPage.clickSeeAllProductsButton()
        ProductsPage.clickContactUsButton()
        ContactUsPage.selectSupportOptionInReasonForContactDropdown()
        ContactUsPage.enterFirstNameFieldValue(Name)
        ContactUsPage.enterLastNameFieldValue(Name)
        ContactUsPage.enterEmailFieldValue(Email)
        ContactUsPage.selectCanadaOptionInCountryDropdown()
        ContactUsPage.enterPhoneNumberFieldValue(Number)
        ContactUsPage.enterCompanyWebsiteFieldValue(Website)
        ContactUsPage.enterDescribeYourRequestFieldValue(Text)
        ContactUsPage.enterHowDidYouHearAboutTelnyxFieldValue(Text)
        ContactUsPage.clickSubmitButton()
        ContactUsPage.checkSubmitMessageTextVisibility()
    }) 
    it('TX_003 Test Contact Us form via Main page with negative scenario where all fields are empty', () => {
        MainPage.clickContactUsButton()
        ContactUsPage.clickSubmitButton()
        ContactUsPage.checkErrorMesageTextVisibility()
    })
    it('TX_004 Chech that "Support Center" button navigate to "https://support.telnyx.com/en/" page on the "Contact us" page', () => {
        MainPage.clickContactUsButton()
        ContactUsPage.scrollToSupportCenterButton()
        ContactUsPage.clickSupportCenterButton()
        SupportPage.checkHeaderTitleTextVisibility()
        SupportPage.checkSupportCenterPageUrl()
    })
    it('TX_005 Check that entered value in "Enter business email" field on the Main Page appearst in "Enter business email" field on Sign Up page', () => {
        MainPage.scrollToEmailField()
        MainPage.enterEmailFieldValue(Email)
        MainPage.clickBudySignUpButton()
        SignUpPage.checkEmailFieldForMachingValue(Email)
    })
    it('TX_006 Test Sign In form with negative scenario where all fields are filled with incorrect data', () => {
        MainPage.clickSignInButton()
        SignInPage.logInButton().should('be.enabled')
        SignInPage.enterEmailFieldValue(Email)
        SignInPage.enterPasswordFieldValue(Password)
        SignInPage.clickRememberMyEmailButton()
        SignInPage.clickLogInButton()
        SignInPage.checkErrorTextMesageVisibility()
    })
    it('TX_007 Test Sign Up form via Main page with filling the correct data in the required fields', () => {
        MainPage.clickHeaderSignUpButton()
        SignUpPage.submitButton().should('be.visible')
        SignUpPage.enterEmailFieldValue(Email)
        SignUpPage.enterFullNameFieldValue(Name)
        SignUpPage.enterPasswordFieldValue(Password)
        SignUpPage.clickAgreeButton()
        SignUpPage.clickSubmitButton()
        SignUpPage.checkSubmitTextMessageVisibility()
    })
    it('TX_008 Test Sign Up form via Main page with filling in the correct data in the required fields and "Promo Code" field', () => {
        MainPage.clickHeaderSignUpButton()
        SignUpPage.submitButton().should('be.visible')
        SignUpPage.enterEmailFieldValue(Email)
        SignUpPage.enterFullNameFieldValue(Name)
        SignUpPage.enterPasswordFieldValue(Password)
        SignUpPage.clickApplyPromoCodeButton()
        SignUpPage.enterPromoCodeFieldValue(Number)
        SignUpPage.clickAgreeButton()
        SignUpPage.clickSubmitButton()
        SignUpPage.checkSubmitTextMessageVisibility()
    })
    it('TX_009 Verify subtitles in the "Your one-stop shop for distributed infrastructure." text and sections on Products page', () => {
        MainPage.clickProductsDropdown()
        MainPage.clickSeeAllProductsButton()
        ProductsPage.checkProductsTextVisibility()
        ProductsPage.checkCommunicationsWindowVisibility()
        ProductsPage.checkNetworkingWindowVisibility()
        ProductsPage.checkProductsTextVisibility()
        ProductsPage.checkStorageWindowVisibility()
    }) 
    it('TX_010 Test Sign In form via Contact Us page with negative scenario where all fields are filled with incorrect credentials', () => {
        MainPage.clickContactUsButton()
        ContactUsPage.scrollDownToLogInButton()
        ContactUsPage.clickLogInButton()
        SignInPage.logInButton().should('be.enabled')
        SignInPage.enterEmailFieldValue(Email)
        SignInPage.enterPasswordFieldValue(Password)
        SignInPage.clickRememberMyEmailButton()
        SignInPage.clickLogInButton()
        SignInPage.checkErrorTextMesageVisibility()
    })
})