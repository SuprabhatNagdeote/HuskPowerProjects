class BijliConnectionActivate
{
/**get connnection()
{
    return $("accessibility id:कनेक्शन एक्टिवटे करे");
}**/
get connnectionBhugtanButton()
{
    return $("accessibility id:भुगतान किजिए");

}
get upi()
{
    return $("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(4)");
}
get payUpi()
{
    return $("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(5)");
}
get upiSuccess()
{
    return $("-android uiautomator:new UiSelector().text(\"Simulate Success\")");

}
get paymentConnectionSuccess()
{
    return $("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(1)");

}
}
export default BijliConnectionActivate;