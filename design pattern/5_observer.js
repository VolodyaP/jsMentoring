/*
 * Observer design pattern
 */

function Cart() {
    this.handlers = [];  // observers
}

Cart.prototype = {

    add: function(position) {
        this.handlers.push(position);

    },

    remove: function(position) {
        var index = this.handlers.indexOf(position);
        if (index > -1) {
            this.handlers.splice(index, 1);
        }

    },

    cartData: function() {
        return this.handlers;
    }

};


var log = (function() {
    var log = "";
    return {
        show: function(msg) {
            log += msg + "\n";
            alert(log); log = "";
        }
    }
})();

function run() {

    var cart = new Cart();

    cart.add('Iphone4');
    cart.add('Iphone5');
    cart.add('Iphone6');

    cart.remove('Iphone5');
    log.show("In Cart: " + cart.cartData());

}

run();
