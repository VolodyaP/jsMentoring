
function printResult(type,object,methodName,result,argument){
    var arg = argument ? ', Argument : '+argument : '';
    console.log(type+': '+ object + ', type : ' + type);
    console.log(type+' method: '+methodName + ' ' +  arg );
    console.log('result: ' + result + ' ' +  typeof result);
    console.log('---------------------------------------------------------------');
}

function getRandomValue(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandMathArray(){
    var arr = [];
    for (var i=0, t=10; i<t; i++) {
        arr.push(Math.round(Math.random() * t))
    }
    return arr;
}

function getRandomStrNumb(obj){
    var length = obj.length;
    arg1 = (Math.floor((Math.random() * length) + 1));
    arg2 = (Math.floor((Math.random() * length) + 1));
    return [arg1,arg2]
}

function forNumb(obj,type){
    var res,rendNumber;
    rendNumber = getRandomValue([1,3,5,7,9,11,7]);
    res = obj.toString();
    printResult(type,obj,'toString',res);

    res = obj.toExponential(rendNumber);
    printResult(type,obj,'toExponential',res,rendNumber);

    res = obj.toFixed(rendNumber);
    printResult(type,obj,'toFixed',res,rendNumber);

    res = obj.toPrecision(rendNumber);
    printResult(type,obj,'toPrecision',res,rendNumber);

    res = Number(obj);
    printResult(type,obj,'Number',res,obj);

    res = parseInt(obj);
    printResult(type,obj,'parseInt',res,obj);

    res = parseFloat(obj);
    printResult(type,obj,'parseFloat',res,obj);

    res = obj.valueOf();
    printResult(type,obj,'valueOf',res);
}

function forStr(obj,type){
    var res,rand,args, randString;

    args = getRandomStrNumb(obj);

    res = function(){
        var arr = obj.split(" ");
        rand = getRandomValue(arr);
        return obj.indexOf(rand);
    };
    printResult(type,obj,'indexOf',res(),rand);

    res = function(){
        var arr = obj.split(" ");
        rand = getRandomValue(arr);
        return obj.lastIndexOf(rand);
    };
    printResult(type,obj,'lastIndexOf',res(),rand);

    res = function(){
        var arr = obj.split(" ");
        rand = getRandomValue(arr);
        return obj.search(rand);
    };
    printResult(type,obj,'search',res(),rand);

    res =  obj.slice(args[0],args[1]);
    printResult(type,obj,'slice',res,args[0] + ',' +args[1]);



    res = obj.substring(args[0],args[1]);
    printResult(type,obj,'substring',res,args[0] + ' , ' + args[1]);

    res = obj.substr(args[0],args[1]);
    printResult(type,obj,'substr',res, args[0] + ' , ' + args[1]);

    res = function() {
        var arr = obj.split(" ");
        rand = getRandomValue(arr);
        randString = getRandomValue(['test','array','text']);
        return obj.replace(rand , randString );
    };
    printResult(type,obj,'replace',res(),rand + ' , ' + randString);

    res = obj.toUpperCase();
    printResult(type,obj,'replace',res);

    res = obj.toLowerCase();
    printResult(type,obj,'toLowerCase',res);

    res = function(){
        randString = getRandomValue(['test','array','text']);
        return obj.concat(obj,randString);
    };
    printResult(type,obj,'concat',res(),randString);

    res = obj.charAt(args[0]);
    printResult(type,obj,'charAt',res,args[0]);

    res = obj.charCodeAt(args[0]);
    printResult(type,obj,'charCodeAt',res,args[0]);

    res = function(){
        rand = getRandomValue([" ",",",".","-","+"]);
        return obj.split(rand);
    };
    printResult(type,obj,'split',res(),rand);
}

function forArr(obj,type){
    if(obj != null){
        if(obj.length){
            var res,clone1,clone2,clone3,clone4,clone5,clone6,clone7,clone8,clone9,clone10,clone11,clone12,rand;

            clone12 = obj.slice(0);
            rand = getRandomValue(['/','+','-','&']);
            res = clone12.join(rand);
            printResult(type,obj,'join',res,rand);

            clone1 = obj.slice(0);
            res = clone1.pop();
            printResult(type,obj,'pop',res);

            clone2 = obj.slice(0);
            rand = getRandomValue(['a1','a2','a3']);
            res = clone2.push(rand);
            printResult(type,obj,'push',res,rand);

            clone3 =  obj.slice(0);
            res = clone3.shift();
            printResult(type,obj,'shift',res);

            clone4 =  obj.slice(0);
            rand = getRandomValue([2,'test','a1']);
            res = clone4.unshift(rand);
            printResult(type,obj,'unshift',res,rand);

            clone5 = obj.slice(0);
            rand = getRandomValue(clone5);
            res = delete clone5[rand];
            printResult(type,obj,'delete',res,rand);

            clone6 = obj.slice(0);
            var arg1 = getRandomValue([1,2,3]);
            var arg2 = getRandomValue([0,1,2]);
            var arg3 = getRandomValue(["a1", "a2","a4","a5"]);
            var arg4 = getRandomValue(["a6", "a7","a8","a9"]);
            res = clone6.splice(arg1, arg2, arg3, arg4);
            printResult(type,obj,'splice',res,arg1 + ' ' + arg2 + ' ' + arg3 + ' ' + arg4);

            clone7 = obj.slice(0);
            res = clone7.sort();
            printResult(type,obj,'sort',res);

            clone8 = obj.slice(0);
            res = clone8.reverse();
            printResult(type,obj,'reverse',res);

            clone9 = obj.slice(0);
            var randomArr = getRandMathArray();
            res = clone9.concat(randomArr);
            printResult(type,obj,'concat',res,randomArr);

            clone10 = obj.slice(0);
            res = clone10.valueOf();
            printResult(type,obj,'valueOf',res);

            clone11 = obj.slice(0);
            res = clone11.toString();
            printResult(type,obj,'toString',res);

        }else {
            console.log('функция не работает с данным типом параметров');
        }
    }else {
        console.log('функция не работает с данным типом параметров');
    }
}

function jsCheckInput(input) {
    var type = typeof input;
    switch (type) {
        case 'number':
            forNumb(input,type);
            break;
        case 'string':
            forStr(input,type);
            break;
        case 'object':
            forArr(input,type);
            break;
        default:
            console.log('функция не работает с данным типом параметров');
    }
}
