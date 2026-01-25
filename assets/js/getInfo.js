function getUserInfo(){
    //Use BigDataCloud API to get Users IP
    let apiKey = '';
    $.getJSON('https://api.bigdatacloud.net/data/client-ip', function(data) {
        localStorage.setItem('ip', data.ipString.toString());
});
    //Launch all the other functions to get and set information
    setUserIP();
    getIpInfo();
    setIPInfo();
    document.getElementById("ubrowser").textContent = detectBrowser();
    document.getElementById("udevice").textContent = detectDeviceType();
}

function setUserIP(){
    document.getElementById("uip").textContent = localStorage.getItem('ip');
}

function getIpInfo(){
    $.getJSON('https://api.iplocation.net/?ip=' + localStorage.getItem('ip'), function(data) {
        localStorage.setItem('country', data.country_name);
        localStorage.setItem('code', data.country_code2);
        localStorage.setItem('isp', data.isp);
        });
}

function setIPInfo(){
    document.getElementById("ulocation").textContent = localStorage.getItem('country');
    document.getElementById("ucc").textContent = localStorage.getItem('code');
    document.getElementById("uisp").textContent = localStorage.getItem('isp');
    const countryCode = localStorage.getItem('code');
  if (countryCode) {
    document.getElementById('uflag').src =
      `https://flagsapi.com/${countryCode}/flat/64.png`;
  }
}

function detectBrowser() {
    let userAgent = navigator.userAgent;
    let browser = "Unknown";
    
    // Detect Chrome
    if (/Chrome/.test(userAgent) && !/Chromium/.test(userAgent)) {
        browser = "Google Chrome";
    }
    // Detect Chromium-based Edge
    else if (/Edg/.test(userAgent)) {
        browser = "Microsoft Edge";
    }
    // Detect Firefox
    else if (/Firefox/.test(userAgent)) {
        browser = "Mozilla Firefox";
    }
    // Detect Safari
    else if (/Safari/.test(userAgent)) {
        browser = "Apple Safari";
    }
    // Detect Internet Explorer
    else if (/Trident/.test(userAgent)) {
        browser = "Internet Explorer";
    }
    
    return browser;
}

const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'Mobile'
    : 'Desktop';