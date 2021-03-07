class FishListPage{
get anglefish(){return cy.get("tbody tr:nth-child(2) td:nth-child(1) a:nth-child(1)")}

selectAngleFish(){
    this.anglefish.click()
}
}
export default new FishListPage()
