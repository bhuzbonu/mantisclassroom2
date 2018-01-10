angular.module('app').service('$appEventHandler', function ($rootScope, $injector) {
    'use strict';
    // This contains methods that can override the default app behavior.

    this.getServerInitParams = function() {
        // Return any data the client needs to send to the user's transform
        // session in order to initialize it.  This could be things like:
        // - device id
        // - device timezone
        // - Data from URL parameters, Local Storage or Cookies.
        // Return null or undefined if no data needs to be sent to the server.
    };

    this.initializeUI = function(params) {
        var app = $injector.get('app');
        // This method is used to initialize the UI based on initial data
        // from the server.  This is used to configure the UI before the first
        // screen is shown.
    };

    this.overideStateHandler = function (oldScreen, newScreen, data) {
        var app = $injector.get('app');
        // Add custom logic here to override what happens when the server
        // requests a client state transition.  Either return a different
        // screen (be sure to include the "app." prefix), or return null to skip the
        // state entirely.  Return "newScreen" as is to proceed normally.
        return newScreen;
    };
});
