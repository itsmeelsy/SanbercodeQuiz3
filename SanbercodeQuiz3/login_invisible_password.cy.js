/// <reference types="cypress"/>

describe('Login Feature',() => {
  it('Pengguna tidak dapat login menggunakan invalid password' ,() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('[name="password"]').should('have.attr', 'type', 'password');
  })
})