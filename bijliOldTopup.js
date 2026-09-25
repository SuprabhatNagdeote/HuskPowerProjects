class OldTopup
{/** 
get oldBhugtan()
{
    return  $("accessibility id:भुगतान करें");
}**/
/**get oldTopups()
{
return $("accessibility id:, टॉप अप");
}**/
get oldPay()
{
return $("accessibility id:भुगतान किजिए");

}
get oldPayment()
{
return $("id:com.huskpowersystems.development:id/rl_nb_payment_mode");

}
get oldCheckout()
{
return $("-android uiautomator:new UiSelector().resourceId(\"com.huskpowersystems.development:id/cv_app\").instance(1)");

}
get oldData()
{
return $("id:com.huskpowersystems.development:id/btn_nb");

}

//await el7.addValue("111000");
get oldAmount()
{
return $("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(6)");
}
get name()
{

return $("class name:android.widget.EditText");

}
get successPayment()
{
return $("-android uiautomator:new UiSelector().text(\" SUCCESS\")");
}
get icicPay()
{
return $("class name:android.widget.Button");
}
get messageBox()
{
return $("-android uiautomator:new UiSelector().resourceId(\"customDialogButtonTwo\")");
}
get dashboardTopup()
{
return $("accessibility id:, डैशबोर्ड, डैशबोर्ड");
}

}
export default OldTopup;