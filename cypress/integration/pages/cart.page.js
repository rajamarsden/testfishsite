class CartPage{
get btncheckout(){return cy.get("#Cart > a")}

proceedCheckOut(){
    this.btncheckout.click()
}
}
export default new CartPage()
