
describe('mocha test suit', ()=> {
   it('first test', () => {
      cy.log('hello cypress');
      cy.visit('www.google.com');
   });

   it('second test', () => {
      cy.log('hello world');
   });
});

context('second suit', ()=> {
   it('first test', () => {
      cy.log('hello cypress');
      cy.visit('www.google.com');
   });

   it('second test', () => {
      cy.log('hello world');
   });
})