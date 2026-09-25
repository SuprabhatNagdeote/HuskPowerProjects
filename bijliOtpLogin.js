class BijliOtpLogin
 {

get noneOfTheAbove()
{
    return $("-android uiautomator:new UiSelector().text(\"NONE OF THE ABOVE\")");

}
get addData()
{
    return $("class name:android.widget.EditText");
}
get otpBijliButton()
{
    return $("-android uiautomator:new UiSelector().text(\"OTP भेजे\")");

}
get bijliView() 
{
return  $("-android uiautomator:new UiSelector().resourceId(\"tooltipBijliView\")");
}
get enterBijliOTP()
{
    return $("xpath://android.view.ViewGroup[@resource-id=\"Enter your OTP\"]/android.widget.EditText");


}
get bijliDataOTP()
{
    return $("class name:android.view.View");

}
get allowButton()
{
    return $("-android uiautomator:new UiSelector().resourceId(\"com.android.permissioncontroller:id/permission_allow_button\")");

}

 }
 export default BijliOtpLogin;