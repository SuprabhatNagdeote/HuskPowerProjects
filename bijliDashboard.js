class BijliDashboard{

    /**get dashboard() 
    {
      return  $("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(52)");
    }**/
    get report()
    {
        return  $("accessibility id:, रिपोर्ट, रिपोर्ट");
        
    }
    get shopping()
    {
        return $("-android uiautomator:new UiSelector().text(\"शॉपिंग\")");
    }
    get huskDialogBox()
    {
        return $("-android uiautomator:new UiSelector().resourceId(\"customDialogButtonTwo\")");

    }
    /**get imageView()
    {
        return $("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(7)");
    }**/
    get profile()
    {
        return $("-android uiautomator:new UiSelector().text(\"प्रोफ़ाइल\")");
    }

    get backBijli()
    {
        return $("-android uiautomator:new UiSelector().resourceId(\"profileTabBijliText\")");

    }
    /**get bhuktan()
    {
        return $("-android uiautomator:new UiSelector().text(\"भुगतान\")");
    }
    get profileBijli() 
    { 
       return $("-android uiautomator:new UiSelector().text(\"प्रोफाइल\")");
        
    }**/
} 
    export default BijliDashboard;



/**    const el7 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(52)");
await el7.click();
const el8 = await driver.$("-android uiautomator:new UiSelector().text(\"\")");
await el8.click();
const el9 = await driver.$("-android uiautomator:new UiSelector().text(\"शॉपिंग\")");
await el9.click();
const el10 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"customDialogButtonTwo\")");
await el10.click();
const el11 = await driver.$("-android uiautomator:new UiSelector().text(\"प्रोफ़ाइल\")");
await el11.click();
const el12 = await driver.$("-android uiautomator:new UiSelector().text(\"लॉग आउट\")");
await el12.click();
const el13 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"tooltipBijliView\")");
await el13.click();
const el14 = await driver.$("-android uiautomator:new UiSelector().text(\"मोबाइल नंबर डाले\")");
await el14.addValue("8999327304");
const el15 = await driver.$("-android uiautomator:new UiSelector().text(\"पासवर्ड डाले\")");
await el15.addValue("123456");
const el16 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(0)");
await el16.click();
const el17 = await driver.$("-android uiautomator:new UiSelector().text(\"\")");
await el17.click();
const el18 = await driver.$("-android uiautomator:new UiSelector().text(\"\")");
await el18.click();
await driver.action('pointer')
  .move({ duration: 0, x: 652, y: 1313 })
  .down({ button: 0 })
  .move({ duration: 1000, x: 652, y: 478 })
  .up({ button: 0 })
  .perform();

const el19 = await driver.$("-android uiautomator:new UiSelector().text(\"लॉग आउट\")");
await el19.click();**/
/**const el11 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"huskDialogTextTwo\")");
await el11.click();
const el12 = await driver.$("-android uiautomator:new UiSelector().text(\"\")");
await el12.click();
const el13 = await driver.$("accessibility id:, हस्क बिजली में जाएँ, ");
await el13.click();
**/