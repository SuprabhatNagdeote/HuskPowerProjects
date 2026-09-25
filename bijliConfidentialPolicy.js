class ConfidentialPolicy
{

    get bijliProfile()
    {
        return $("-android uiautomator:new UiSelector().text(\"प्रोफाइल\")");
        
    }
    get policyConfidential()
    {
        return $("-android uiautomator:new UiSelector().text(\"गोपनीयता नीति\")");

    }
    get dashboard()
{

     return $("-android uiautomator:new UiSelector().text(\"डैशबोर्ड\")");

}
}
export default ConfidentialPolicy;
