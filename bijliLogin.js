class BijliLogin {

    get bijliView() 
    {
    return  $("-android uiautomator:new UiSelector().resourceId(\"tooltipBijliView\")");
    
    }
    get mobileNumber()
    {
        return  $("-android uiautomator:new UiSelector().text(\"मोबाइल नंबर डाले\")");
    }
    get validMobileNumber()
    {
        return $("-android uiautomator:new UiSelector().text(\"8269891484\")");

    }
    get invalidMobileNumber()
    {
        return $("-android uiautomator:new UiSelector().text(\"9898877898\")");

    }
    get invalidPassword()
    {
        return $("-android uiautomator:new UiSelector().text(\"••••••\")");

    }
    get validPassword()
    {
        return $("-android uiautomator:new UiSelector().text(\"•••••••\")");

    }
    get password()
    {
    return $("-android uiautomator:new UiSelector().text(\"पासवर्ड डाले\")");

    }
    get loginButton()
    {
        return $("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(0)");

    }
    get allowButton()
    {
        return $("-android uiautomator:new UiSelector().resourceId(\"com.android.permissioncontroller:id/permission_allow_button\")");

    }
    get textBijli()
    {

    return $("-android uiautomator:new UiSelector().text(\"\")");
    }
    get logout()
    {
      return $("-android uiautomator:new UiSelector().text(\"लॉग आउट\")");
    }
    get toolBijli()
    {
    return $("-android uiautomator:new UiSelector().resourceId(\"tooltipBijliImage\")");
    }
   get androidViewBijli()
   {
    return $("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(0)");
   }

get huskDialogBox()
{
return $("-android uiautomator:new UiSelector().resourceId(\"huskDialogTextTwo\")");
}
get invalidMobile()
{
return $("-android uiautomator:new UiSelector().text(\"9865327894\")");
}
get invalid_Password()
{
    return $("-android uiautomator:new UiSelector().text(\"••••••\")");

}
get profileForLogin()
{
    return $("accessibility id:, प्रोफाइल, प्रोफाइल");

}
get logoutNewBijli()
{
    return $("accessibility id:, लॉग आउट");
}
 }
    
    export default BijliLogin;
