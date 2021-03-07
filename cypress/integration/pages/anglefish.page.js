class AngleFishPage{
 get btnaddtocart(){return cy.get("tbody tr:nth-child(2) td:nth-child(5) a:nth-child(1)")}
 
 addToCart(){
  this.btnaddtocart.click()
 }

}
export default new AngleFishPage()
