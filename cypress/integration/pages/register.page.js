class RegisterPage{
 get txtusername(){return cy.get("input[name='username']")}
 get txtpassword(){return cy.get("input[name='password']")}
 get txtrepassword(){return cy.get("input[name='repeatedPassword']")}
 get txtfirstname(){return cy.get("input[name='account.firstName']")}
 get txtlastname(){return cy.get("input[name='account.lastName']")}
 get txtemail(){return cy.get("input[name='account.email']")}
 get txtphone(){return cy.get("input[name='account.phone']")}
 get txtaddresss1(){return cy.get("input[name='account.address1']")}
 get txtaddresss2(){return cy.get("input[name='account.address2']")}
 get txtcity(){return cy.get("input[name='account.city']")}
 get txtstate(){return cy.get("input[name='account.state']")}
 get txtzip(){return cy.get("input[name='account.zip']")}
 get txtcountry(){return cy.get("input[name='account.country']")}
 get btnaccountinfo(){return cy.get("input[name='newAccount']")}

 register(username,email){
 
    

    
     this.txtusername.type(username)
     this.txtpassword.type('Password')
     this.txtrepassword.type('Password')

     this.txtfirstname.type('FirstName')
     this.txtlastname.type('LatName')
     this.txtemail.type(email)
     this.txtphone.type('7777777777')
     this.txtaddresss1.type('Add line1')
     this.txtaddresss2.type('Add line2')
     this.txtcity.type('London')
     this.txtstate.type('Newham')
     this.txtzip.type('00000')
     this.txtcountry.type('uk')
     this.btnaccountinfo.click()


 }  
}
export default new RegisterPage()
