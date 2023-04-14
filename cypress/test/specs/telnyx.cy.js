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
        CoockiesPage.acceptCookies()
    })
    it('TX_001 Test the "Contact Us" form with positive scenario, form opened via header link from the main page', () => {
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
    it('TX_002 Test the "Contact Us" form with positive scenario, form opened via link from the Products page', () => {
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
    it('TX_003 Test the "Contact Us" formwith negative scenario when all fields are left empty', () => {
        MainPage.clickContactUsButton()
        ContactUsPage.clickSubmitButton()
        ContactUsPage.checkErrorMesageTextVisibility()
    })
    it('TX_004 Chech that "Support Center" link navigate to "Support Center" page from the "Contact us" page', () => {
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
    it('TX_007 Check that "Confirm email" page is loading after clicking "Submit" button on Sign Up page with filling the correct data in the required fields', () => {
        MainPage.clickHeaderSignUpButton()
        SignUpPage.submitButton().should('be.visible')
        SignUpPage.enterEmailFieldValue(Email)
        SignUpPage.enterFullNameFieldValue(Name)
        SignUpPage.enterPasswordFieldValue(Password)
        SignUpPage.clickAgreeButton()
        SignUpPage.clickSubmitButton()
        SignUpPage.checkSubmitTextMessageVisibility()
    })
    it('TX_008 Check that "Confirm email" page is loading after clicking "Submit" button on Sign Up page with filling in the correct data in the required fields and "Promo Code" field', () => {
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
    it('TX_009 Check that "Communications", "Networking", "Wireless", "Storage" options are visible on Products page', () => {
        MainPage.clickProductsDropdown()
        MainPage.clickSeeAllProductsButton()
        ProductsPage.checkProductsTextVisibility()
        ProductsPage.checkCommunicationsWindowVisibility()
        ProductsPage.checkNetworkingWindowVisibility()
        ProductsPage.checkProductsTextVisibility()
        ProductsPage.checkStorageWindowVisibility()
    }) 
    it('TX_010 Test Sign In form from Contact Us page with negative scenario where all fields are filled with incorrect credentials', () => {
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