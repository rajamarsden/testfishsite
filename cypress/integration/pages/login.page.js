class LoginPage{
 get lnkregister(){return cy.get("#Catalog > a")}

 get txtpassword(){return cy.get("input[name='password']")}
 get btnlogin(){return cy.get("input[name='signon']")}

 selectRegister(){
     this.lnkregister.click()
 }

 login(){
     this.txtpassword.clear().type('Password')
     this.btnlogin.click()
 }
}

export default new LoginPage()
