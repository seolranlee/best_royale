import detect from "./detect";
// import DataProvider from "./DataProvider";

var DataProvider = {
    include: false,
    windowWidth: 0,
    windowHeight: 0,
    WINDOW_MIN_WIDTH: 1200,
    WINDOW_MAX_WIDTH: 1600,
    TABLET_LANDSCAPE_WIDTH: 1024,
    TABLET_LANDSCAPE_HEIGHT: 715,
    TABLET_PORTRAIT_WIDTH: 768,
    TABLET_PORTRAIT_HEIGHT: 974,
    MOBILE_MAX_WIDTH:846
};

/**
 * Created by vanvan on 2017-01-18.
 */
let _Device = detect._Device;
/*
 * viewport -------------------------------------------------------------------------------------------------------------------
 * */
var ViewportUtill = (function(){
    var mode;
    function _change() {
        var ratio;
        /*   (function initialize() {
         if (window.DeviceOrientationEvent) {
         window.addEventListener('orientationchange', changeOrientation, false);
         changeOrientation();
         }
         })();*/
        if (_Device.type != 1) return;

        var deviceWidth = window.innerWidth;
        var deviceHeight = window.innerHeight;

        if (deviceWidth > deviceHeight) {
            mode = 'landscape';
        } else {
            mode = 'portrait';
        }

        switch (mode) {
            case 'landscape' :
                ratio = DataProvider.TABLET_LANDSCAPE_WIDTH / DataProvider.WINDOW_MIN_WIDTH;
                break;
            case 'portrait' :
                ratio = DataProvider.TABLET_PORTRAIT_WIDTH / DataProvider.WINDOW_MIN_WIDTH;
                break;
        }
        //alert(mode)
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=' + ratio + ', minimum-scale=' + ratio + ', maximum-scale=' + ratio);

        // $("meta[name=viewport]").attr('content', 'width=device-width, initial-scale=' + ratio + ', minimum-scale=' + ratio + ', maximum-scale=' + ratio);
        /*   function changeOrientation() {

         }*/

    }
    function _getMode(){
        return mode;
    }
    _change();

    return {
        getMode : _getMode,
        change : _change
    }
})();

export default {
    getMode : ViewportUtill.getMode,
    change: ViewportUtill.change
}