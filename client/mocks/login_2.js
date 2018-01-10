'use strict';
window.mocks = window.mocks || {};
window.mocks.login_2 = window.mocks.login_2 || {};
window.mocks.login_2.submit = function ($scope, params, app) {
    if (window.plugins && window.plugins.touchid) {
        window.plugins.touchid.save('credentials', JSON.stringify(params.data), function () {
            alert('logged in!');
        }, function (err) {
            alert(err);
        });
    }
};