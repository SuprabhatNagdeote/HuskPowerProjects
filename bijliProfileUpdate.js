class BijliProfileUpdate
{
    get profileUpdate()
    {
        return $("accessibility id:, प्रोफ़ाइल अप्डेट करें, ");

    }
    get profileImage()
    {  
      return $("-android uiautomator:new UiSelector().text(\"\")");

        //return $("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\")");

    }
    get profileCamera()
    {
        return $("-android uiautomator:new UiSelector().description(\", Camera\")");

    }
    get permissionMessage()
    {
        return $("id:com.android.permissioncontroller:id/permission_allow_foreground_only_button");

    }
    get camera()
    {
        return $("accessibility id:Shutter");
    }
    get done()
    {
        return $("accessibility id:Done");
    }
    get updateFirstName()
    {
        return $("//android.widget.EditText[1]");
    }
    get newFirstName()
    {
      return $("-android uiautomator:new UiSelector().text(\"पहला नाम\")");
    }
    get updateLastName()
    {
       //return $("-android uiautomator:new UiSelector().text(\"Test\")");
       return $("(//android.widget.EditText)[2]");

       
    }
    get newLastName()
    {
        return $("-android uiautomator:new UiSelector().text(\"अंतिम नाम\")");

    }
    get empName()
    {
        //return $("-android uiautomator:new UiSelector().text(\"Muskantest\")");
        return $("(//android.widget.EditText)[3]");

    }
    get newEmp()
    {
        return $("-android uiautomator:new UiSelector().text(\"व्यवसाय का नाम दर्ज करें\")");

    }
    get updateEmail()
    {
       // return $("-android uiautomator:new UiSelector().text(\"testmuskan910@gmail.com\")");
       return $("(//android.widget.EditText)[4]");

    }
     get newEmail()
    {
         return $("-android uiautomator:new UiSelector().text(\"आपका ईमेल\")");

    }
     /**get mobilenumber()
    {
        return $("(//android.widget.EditText)[5]");


    }
    get updateMobileNumber()
    {
        return $("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(19)");
    }**/
    get updateAddress()
    {
        return $("-android uiautomator:new UiSelector().text(\"201 A Test\")");
       // return $("(//android.widget.EditText)[5]");

    }
    get newAddress()
    {
        return $ ("-android uiautomator:new UiSelector().text(\"Enter Address\")");
    }
    get profileUpdateButton()
    {
        return $("accessibility id:प्रोफ़ाइल अपडेट करें");  
    } 
    get huskMessageBox()
    {
      return $("-android uiautomator:new UiSelector().resourceId(\"huskDialogTextTwo\")");    
    }
  
}
export default BijliProfileUpdate;
