class  BijliReportScreen
{
    get report()
    {
    return $("-android uiautomator:new UiSelector().text(\"\")"); 
    }
    get planChange()
    {
      return $("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(0)");
    }
    get plan()
    {
        return $("class name:android.widget.Spinner");
    }
    get selectPlan()
    {
        return $("-android uiautomator:new UiSelector().text(\"PLAN 200 BIZ\")");
    }
    get continue()
    {
       return $("-android uiautomator:new UiSelector().text(\" जारी रखें\")");
    }
    get payNow()
    {
        return $("accessibility id:Pay Now");
    }
    get  netBanking()
    {
    return $("id:com.huskpowersystems.development:id/tv_nb");
    }
     get icic()
     {
    return $("-android uiautomator:new UiSelector().resourceId(\"com.huskpowersystems.development:id/cv_app\").instance(1)");
     }
    get pay()
    {
     return $("id:com.huskpowersystems.development:id/btn_nb");
    }
get simulator()
{
 return $("class name:android.widget.EditText");
}
get success()
{

return $("-android uiautomator:new UiSelector().text(\" SUCCESS\")");
}
get button(){

return $("class name:android.widget.Button");
}
get huskDialogBox()
{
return $("-android uiautomator:new UiSelector().resourceId(\"huskDialogTextTwo\")");
}

}
export default BijliReportScreen;
