class PaymentPage{
get btncontinue(){return cy.get('[name="newOrder"]')}

makePayment(){
    this.btncontinue.click()
}
}
export default new PaymentPage()
