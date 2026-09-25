class BijliBhuktanScreen
{
  get bhuktan()
  {
    return $("-android uiautomator:new UiSelector().text(\"\")");
  }
  get bhuktanKare()
  { 
    return $("accessibility id:अभी भुगतान करें");
  }
  get bijliPlanChange()
  {
    return $("-android uiautomator:new UiSelector().text(\"\").instance(1)");
  }  
  
  get profile()
  {
    return $("-android uiautomator:new UiSelector().text(\"\")");

  }
  
}
export default BijliBhuktanScreen;