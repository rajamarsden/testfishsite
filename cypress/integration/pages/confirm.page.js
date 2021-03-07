class ConfirmPage{

    get btnconfirm(){ return cy.get('.Button')}
    selectConfirm(){
        this.btnconfirm.click()
    }
}
export default new ConfirmPage()
