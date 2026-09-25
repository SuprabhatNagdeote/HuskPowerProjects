class NewBhugtanBijli
{ 

  get connectionNew()
  {
    return $("accessibility id:कनेक्शन एक्टिवेट कीजिये");

  }

    get bhugtanBijli()
    {
        return $("accessibility id:भुगतान किजिए");

    }
    get bijliPay()
    {
        return $("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(4)");

    }
    get amountPay()
    {
        return $("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(4)");

    }
    get amountPhonePay()
    {
        return $("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(5)");

    }
    get success()
    {
        return $("-android uiautomator:new UiSelector().text(\"Simulate Success\")");

    }
get homePage()
{
    return $("accessibility id:डैशबोर्ड पर जाएं");

}
}
export default NewBhugtanBijli;