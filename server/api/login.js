var logger = require('powwow-server-common').logger;
var config = require('../config');
var browser =  require('powwow-server-common').browser;

exports.loginBasic = function (page, params) {
    var loadFailed = false;
    page.onResourceLoad(config.loginURL).then(function (response) {
        if (response.contentType == null && response.status == null && response.headers.length == 0) {
            loadFailed = true;
        }
    });
	
	//onLoadfailure accepts regular Expression to detect error
    page.onLoadFailure(/about:corlogin/)
        .data(function (data) {
            if (loadFailed) {
                data.error = "Unable to access " + config.loginURL;
            } else {
                data.error = "Login failed.  Please check your username and password and try again.";
            }
            data.username = params.username;
        })
        .screen('login');

    browser.getMainPage().set('settings.userName', params.username, function () {
        browser.getMainPage().set('settings.password', params.password, function () {
            browser.getMainPage().open(config.loginURL);
        });
    });

}