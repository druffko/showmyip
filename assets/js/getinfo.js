function getUserInfo(){
    //Use BigDataCloud API to get Users IP
    let apiKey = 'bdc_ba0439652fc54d4d8e25a2f56b9a1100';
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
}