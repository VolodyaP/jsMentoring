/*
 * Proxy design pattern
 */

function DataBaseModel() {

    this.getData = function(data) {

        if (data === "username") {
            return "Volodymyr";
        } else if (data === "email") {
            return "v.panchishin@svitla.com";
        } else if (data === "password") {
            return "1234";
        } else {
            return "Error";
        }
    };
}

function Proxy() {
    var data = new DataBaseModel();
    var geocache = {};

    return {
        getData: function(address) {
            if (!geocache[address]) {
                geocache[address] = data.getData(address);
            }
            log.add(address + ": " + geocache[address]);
            return geocache[address];
        },
        getCount: function() {
            var count = 0;
            for (var code in geocache) { count++; }
            return count;
        }
    };
};

// log helper

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();

function run() {
    var proxy = new Proxy();

    // database requests

    proxy.getData("username");
    proxy.getData("password");
    proxy.getData("password");
    proxy.getData("password");
    proxy.getData("email");
    proxy.getData("username");
    proxy.getData("username");
    proxy.getData("username");
    proxy.getData("username");
    proxy.getData("email");
    proxy.getData("email");

    log.add("\nCache size: " + proxy.getCount());
    log.show();
}

run();
