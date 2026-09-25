class Topups
{
 /** get bijliTopup()
  {
 return $("accessibility id:टॉप उप");
  }**/
//await el1.click();
get bijliDashboardBugthan()
{
return $("accessibility id:भुगतान किजिए");
}
/**get checkoutPayment()
{
return $("id:com.huskpowersystems.development:id/btn_pay");

}**/
//await el2.click();
get bijliPayment()
{
return $("id:com.huskpowersystems.development:id/rl_nb_payment_mode");//const el11 = await driver.$("id:com.huskpowersystems.development:id/rl_nb_payment_mode");

}
//await el7.addValue("111000");
get bijliPay()
{
return $("-android uiautomator:new UiSelector().resourceId(\"com.huskpowersystems.development:id/cv_app\").instance(1)");

}
/**get amountChecout()
{
  return $("-android uiautomator:new UiSelector().resourceId(\"com.huskpowersystems.development:id/cv_app\").instance(1)");
}**/

get amount()
{
return $("id:com.huskpowersystems.development:id/btn_nb");
}
get data()
{
return $("class name:android.widget.EditText");
//await el6.addValue("111000");
}
get successPayment()
{
return $("-android uiautomator:new UiSelector().text(\" SUCCESS\")");
}
get icicPay()
{
return $("class name:android.widget.Button");
}
get customDialoge()
{
return $("-android uiautomator:new UiSelector().resourceId(\"customDialogButtonView\")");
}
}
export default Topups;