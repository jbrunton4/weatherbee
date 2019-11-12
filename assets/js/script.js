
function init() {
    redirToMobile();
    const current_url = window.location.href;   
}

function redirToMobile() {
    var clientOS = "unknown";
    if (navigator.appVersion.indexOf("Win") != -1) {
        clientOS = "Windows";
    } if (navigator.appVersion.indexOf("Mac") != -1) {
        clientOS = "MacOS";
    } if (navigator.appVersion.indexOf("X11") != -1) {
        clientOS = "Unix OS";
    } if (navigator.appVersion.indexOf("Linux") != -1) {
        clientOS = "Linux";
    }
    
    if ((clientOS in ["Windows","MacOS","Unix OS", "Linux"]) == false) {
        // add redirect to mobile site
    }
}

// Functions for social media buttons
function socialInstagram() {
    window.open("https://www.instagram.com/weatherbee__/", "_blank");
    return 0;
}
function socialFacebook() {
    window.open("https://www.facebook.com/weather.bees.54", "_blank");
    return 0;
}