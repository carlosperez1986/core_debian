﻿//var msg = "";
//function disableIE() {
//    if (document.all) {
//        //alert(msg);
//        return false;
//    }
//}
//function disableNS(e) {
//    if (document.layers || (document.getElementById && !document.all)) {
//        if (e.which == 2 || e.which == 3) {
//            //alert(msg);
//            return false;
//        }
//    }
//}
//if (document.layers) {
//    document.captureEvents(Event.MOUSEDOWN); document.onmousedown = disableNS;
//} else {
//    document.onmouseup = disableNS; document.oncontextmenu = disableIE;
//}
//document.oncontextmenu = ev => {
//    ev.preventDefault();
//}