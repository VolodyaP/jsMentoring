/*
 * Adapter design pattern
 */

// old product

function ProductOld() {
    this.request = function(qty, weight, price) {
        // ...
        return "$49.99";
    }
}

// new product

function NewProduct() {
    this.color = function(color) { /* ... */ };
    this.setQty = function(qty) { /* ... */ };
    this.setWeight = function(weight) { /* ... */ };
    this.calculate = function(price) { return "$39.99"; };
}

// adapter interface

function ProductAdapter(color) {
    var newProd = new NewProduct();

    newProd.color(color);

    return {
        request: function(qty, weight, price) {
            newProd.setQty(qty);
            newProd.setWeight(weight);
            return newProd.calculate(price);
        }
    };
}

// log helper

var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

function run() {
    var prodOld = new ProductOld();
    var color = 'yellow';
    var adapter = new ProductAdapter(color);

    // original product object and interface

    var cost = prodOld.request("1", "400", "49.99");
    log.add("Old product cost: " + cost);

    // new product object with adapted interface

    cost = adapter.request("1", "200", "39.99");

    log.add("New product cost: " + cost);
    log.show();
}

run();