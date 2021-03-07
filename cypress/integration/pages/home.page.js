class HomePage{
 get iconfish(){return cy.get("img[src='../images/fish_icon.gif']")}
 get lnksignin(){return cy.get('[href="/actions/Account.action?signonForm="]')}
 get iconcart(){return cy.get("img[name='img_cart']")}
 
 openUrl(){
     cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
 }
 selectFish(){
     this.iconfish.click()
 }

 selectSignin(){
     this.lnksignin.click()
 }

 selectCart(){
     this.iconcart.click()
 }
}

export default new HomePage()