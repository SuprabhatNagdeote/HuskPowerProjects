class TariffPlanChange
{
get planChange()
{
return $("-android uiautomator:new UiSelector().description(\", प्लान परिवर्तन\")");
}
get change()
{
    return $("accessibility id: प्लान परिवर्तन");
}
get plan()
{
 return $("-android uiautomator:new UiSelector().className(\"android.widget.Spinner\")");
}
get planSelect()
{
return $("-android uiautomator:new UiSelector().text(\"PLAN 200 BIZ\")");
}
get tariff()
{
return $("-android uiautomator:new UiSelector().text(\" जारी रखें\")");

}
get payNow()
{
return $("accessibility id:भुगतान किजिए");

}
get id()
{
return $("id:com.huskpowersystems.development:id/rl_nb_payment_mode");

}
/**get icic()
{
 return $("id:com.huskpowersystems.development:id/tv_nb");
}**/
get pay()
{
return $("-android uiautomator:new UiSelector().resourceId(\"com.huskpowersystems.development:id/cv_app\").instance(1)");

}

get checkoutButton()
{
return $("id:com.huskpowersystems.development:id/btn_nb");
}
get oTP()
{
return $("class name:android.widget.EditText");
}
//await el16.addValue("111000");
get status()
{
 return $("-android uiautomator:new UiSelector().text(\" SUCCESS\")");
}
get payButton()
{
return $("class name:android.widget.Button");
}
get huskDialogBox()
{
return $("-android uiautomator:new UiSelector().resourceId(\"customDialogButtonTwo\")");
}
get dashboard()
{
return $("-android uiautomator:new UiSelector().text(\"डैशबोर्ड\")");
}
}
export default TariffPlanChange;
