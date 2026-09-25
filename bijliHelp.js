class bijliHelp
{
   get help()
   {
    return $("-android uiautomator:new UiSelector().text(\"नई शिकायत\")");
   
   }
   get dataDropdown()
   {
     // return $("-android uiautomator:new UiSelector().text(\"विषय चुनें\")");
     return $("accessibility id:विषय चुनें");

   }
get recharge()
{
return $("accessibility id:रिचार्ज");
}
get testData()
{
return $("class name:android.widget.EditText");
}
//await el13.addValue("TestData");
get complaintButton()
{
   return $("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(15)");
}
}
export default bijliHelp;