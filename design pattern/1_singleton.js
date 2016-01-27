/*
* Singleton design pattern
*/

function Singleton() {

    if (typeof Singleton.instance === "object") {
        return Singleton.instance;
    }

    Singleton.instance = this;
}

    var obj1 = new Singleton();
    var obj2 = new Singleton();
    var res = obj1 === obj2;

    console.log(res);
