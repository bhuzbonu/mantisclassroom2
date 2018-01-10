'use strict';
module.exports = {
    // Start URL that browsing should start at.
    startURL: 'http://ec2-52-41-179-125.us-west-2.compute.amazonaws.com/mantisbt/login_page.php',
    loginURL: 'http://your-application-url-with-basic-login',
    // Start Method when there is no start URL.  This is fpr when we are doing an API integration,
    // and we don't actually need to load phantom (yet).
    // startMethod: "login.onStart",
    // *******  State Detection configuration, used to determine when to check states *************
    stateDetection: {
        domMutations: {
            watch: true,
            ignoreList: []
        },
        // List of DOM mutations to ignore.  Match is substring match.  Start with '=' for exact match.
        resourceLoads: {
            watch: true,
            checkList: [
                // List of resources mime types to run check state for.
                'text/xml',
                'application/json'
            ]
        }
    },
    //
    // ******* App Server Configuration *******
    // Where is the Powwow Application server running?
    appServerPort: 9080,
    // appServerProtocol: "http",
    // appServerHost: "localhost",
    // appServerRejectUnauthorized: false, // False by default, set true to reject app server without proper certificate.
    //
    // ******* Timeout configuration *******
    // How long before a client request should be timed out if it doesn't finish executing? (in milliseconds)
    timeout: 3 * 60 * 1000,
    //
    // For how long should the session remain open once the client has disconnected? (in milliseconds)
    lifetime: 3 * 60 * 1000,
    //
    // How long to wait after being created to wait for an initial connection before terminating the session. (in milliseconds)
    firstConnectTimeout: 1 * 60 * 1000,
    //
    // Keep the session open when a timeout occurs?  (Doesn't exit, just closes the original website and frees up resources.)
    keepSessionAliveOnTimeout: false,
    //
    // Timeout for loading pages from the original website (in milliseconds)
    loadFailTimeout: 10 * 1000,
    //
    // ******* User Agent *******
    // Suffix to add to the user agent string.
    userAgentSuffix: 'Powwow/1.0',
    // userAgentReplacement: "Custom user agent string goes here",
    //
    // Viewport configuration
    viewportSize: {
        width: 1024,
        height: 768
    },
    //
    // Environment variables to set when launching Phantom JS.
    // This can be updated in the initialize method.
    // env: {
    //     TZ: 'America/New_York'
    // },
    //
    // ******* Logging configuration *******
    log: {
        resourceRequests: false,
        resourceLoads: false,
        // Log filters let you exclude some parameters from logs for security purposes,
        // such as passwords or other sensitive user data.
        // Usage: "api.method": [ "param1", "param2" ]
        logFilters: { 'login.login': ['password'] }
    },
    // Size of the params to log for server responses.  Requests are always fully logged.
    // By default, server responses are truncated to 80 chars.  This will allow for a longer
    // length.  Set to -1 to fully log a response, or 0 to not log it at all.
    // paramSizeFilters: {
    //     "setState.statetofullylog": -1
    // }
    //
    // ********** Debugging Configuration *********
    //
    // Port to run on when in single-user mode and not managed by AppServer.
    // This defaults to 3000, and can be changed below.
    // port: 3000,
    //
    // Allow remote debugging using Chrome (or any other client that supports the remote debugging protocol)
    remoteDebug: {
        enabled: false,
        port: 8093,
        phantomRequestResponse: false
    },
    //
    // Send screenshots of the current app to the Phantom Visual Server.
    // phantomVisual: {
    //     host: 'localhost',
    //     port: 8082,
    //     interval: 1000
    // },
    //
    // ********** Proxy Configuration *********
    //
    // Is there a proxy server through which to connect to the the original website?
    // proxy: {
    //    host: '',
    //    port: '',
    //    proxyType: '',
    //    user: '',
    //    password: ''
    // },
    //
    // ********* Local Storage configuration **********
    localStorageIsolationOff: false,
    // Set this to true to not isolate local storage.
    // When localStorageIsolation is on (the default) then we will by default
    // create a temp folder to keep localStorage under the current
    // working directory.  To create the temp folders elsewhere, set this:
    // localStoragePath: "/apps/powwow/localStorage",
    //
    // Flag to enable when running Gatling load tests.
    //  - Disables web socket server keepAlive messages (see https://github.com/gatling/gatling/issues/2601)
    //  - Stops sending a "ui.initialize" message on first connect as this confuses the load test framework.
    // gatlingLoadTest: false,
    //
    // ***************** Application specific configuration *****************
    //
    // Dynamic configuration.  initializationData goes from the Transformation Server to the Web UI.
    getInitializationData: function () {
        return {};
    },
    //
    // Initialize method returns a promise.
    initializeReturnsPromise: false,
    //
    // Initializes the Transformation server with Data from the client.  This is also a good place to dynamically
    // update other config variables such as config.startURL or config.env.
    initialize: function (initData) {
    }
};