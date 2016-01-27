/*
 * Decorator design pattern
 */

function Sale(price) {
    this.price = price;
}
Sale.prototype.getPrice = function () {
    return this.price;
};

Sale.decorators = {};

Sale.decorators.newPost = {
    getPrice: function () {
        var price = this.uber.getPrice();
        var newPostPrice = 30;
        return price + newPostPrice;
    }
};

Sale.decorators.courier = {
    getPrice: function () {
        var price = this.uber.getPrice();
        var courierPrice = 100;
        return price + courierPrice;
    }
};


Sale.prototype.decorate = function (decorator) {
    var F = function () {},
        overrides = this.constructor.decorators[decorator],
        i,
        newobj;

        F.prototype = this;
        newobj = new F();
        newobj.uber = F.prototype;
        for (i in overrides) {
            if (overrides.hasOwnProperty(i)) {
                newobj[i] = overrides[i];
            }
        }
        return newobj;
    };

var sale = new Sale(100);
sale = sale.decorate('courier');
console.log(sale.getPrice());
