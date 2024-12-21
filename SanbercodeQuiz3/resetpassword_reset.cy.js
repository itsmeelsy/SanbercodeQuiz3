/// <reference types="cypress"/>

describe('Login Feature',() => {
it('Pengguna dapat mereset password' ,() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click();
    cy.get('[class="orangehrm-forgot-password-container"]').should('contain','Reset Password');
    cy.get('[name="username"]').type('Admin');
    cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
    cy.get('[class="orangehrm-forgot-password-container"]').should('contain','Reset Password link sent successfully');
  })
})