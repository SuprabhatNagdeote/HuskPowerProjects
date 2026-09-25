class CancelConnection
{
get cancel()
{
    return $("accessibility id:कनेक्शन बंद करे");
}
get suggestion()
{
    return $("accessibility id:कैंसल करें");
}
get connectionCancelMessage()
{
return $("-android uiautomator:new UiSelector().resourceId(\"customDialogButtonTwo\")");
}

}
export default CancelConnection;