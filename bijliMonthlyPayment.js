class MonthlyPaymentScreen
{
 /** get monthlyRecharge()
  {

  return $("-android uiautomator:new UiSelector().text(\"मासिक रिचार्ज\")");

  }**/

 get payNow()
 {
  return $("accessibility id:भुगतान किजिए");
 }
 get checkout()
 {
  return $("id:com.huskpowersystems.development:id/rl_nb_payment_mode");


 }
  get paymentMode()
  {
    return $("-android uiautomator:new UiSelector().resourceId(\"com.huskpowersystems.development:id/cv_app\").instance(1)");


  }
  get otp()
  {
    return $("id:com.huskpowersystems.development:id/btn_nb");

  }

get ok()
{
  return $("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(6)");
//const el7 = await driver.$("class name:android.widget.EditText");

}
get androidView()
{
  return $("class name:android.widget.EditText");

}
get paymentSucssesUPI()
{
return $("-android uiautomator:new UiSelector().text(\" SUCCESS\")");
}
get icicPay()
{
return $("class name:android.widget.Button");
}
  get huskDialogBox()
  {
    return $("-android uiautomator:new UiSelector().resourceId(\"customDialogButtonTwo\")");

  }
get dashboard()
{
  return $("accessibility id:, डैशबोर्ड, डैशबोर्ड");
}
}
export default MonthlyPaymentScreen;
