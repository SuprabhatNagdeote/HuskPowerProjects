class TermsAndConditions
{
    get bijliProfile()
    {
        return $("-android uiautomator:new UiSelector().text(\"प्रोफाइल\")");
        
    }

  get termsAndCondition()
{
return $("-android uiautomator:new UiSelector().text(\"उपयोग की शर्ते\")");
}

get dashboard()
{

     return $("-android uiautomator:new UiSelector().text(\"डैशबोर्ड\")");

}
}
export default TermsAndConditions;
