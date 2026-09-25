class ComplaintScreen
{
   get shikayat()
   {
   return $("accessibility id:, शिकायत, ");
   }

   get help()
    {
     return $("-android uiautomator:new UiSelector().text(\"नई शिकायत\")");
   
    }
    get dataDropdown()
    {
      // return $("-android uiautomator:new UiSelector().text(\"विषय चुनें\")");
      return $("accessibility id:विषय चुनें");
    }
 get avabilityBijli()
 {
 return $("accessibility id:बिजली की उपलब्धता");
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
export default ComplaintScreen;
