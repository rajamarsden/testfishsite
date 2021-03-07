 import HomePage from '../pages/home.page'
 import FishListPage from'../pages/fishlist.page'
 import AngleFishPage  from '../pages/anglefish.page'
 import CartPage from '../pages/cart.page'
 import LoginPage from '../pages/login.page'
 import RegisterPage from '../pages/register.page'
 import PaymentPage from '../pages/payment.page'
 import ConfirmPage from '../pages/confirm.page'
import OrderPage from '../pages/order.page'

 describe('petstore check out',()=>{
     it('Buying fish from pt store',()=>{

    let random=Math.floor(Math.random()*10000)
    let username='Testuser'+random
    let email=`Fisrt.Last${random}@demo.com`

        HomePage.openUrl()
        HomePage.selectFish()
        FishListPage.selectAngleFish()
        AngleFishPage.addToCart()
        CartPage.proceedCheckOut()
        LoginPage.selectRegister()
        RegisterPage.register(username,email)
        HomePage.selectSignin()
        LoginPage.login()
        HomePage.selectCart()
        CartPage.proceedCheckOut()
        PaymentPage.makePayment()
        ConfirmPage.selectConfirm()
        OrderPage.lblmessage.should('contain','Thank you')








     })
 })