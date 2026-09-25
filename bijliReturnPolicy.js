class ReturnPolicy{

    get bijliProfile()
    {
        return $("-android uiautomator:new UiSelector().text(\"प्रोफाइल\")");
        
    }
    
    get policy()
    {
       return $("-android uiautomator:new UiSelector().text(\"भुगतान वापसी की नीति\")");

    }
   //const el2 = await driver.$("-android uiautomator:new UiSelector().text(\"भुगतान वापसी की नीति\")");

    
}
export default ReturnPolicy;
