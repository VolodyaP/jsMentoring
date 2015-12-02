
function printResult(type,object,methodName,result,argument){
    var arg = argument ? ', Argument : '+argument : '';
    console.log(type+': '+ object + ', type : ' + type);
    console.log(type+' method: '+methodName + ' ' +  arg );
    console.log('result: ' + result + ' ' +  typeof result);
    console.log('---------------------------------------------------------------');
}

function forNumb(obj,type){
    var res;
    res = obj.toString();
    printResult(type,obj,'toString',res);

    res = obj.toExponential(4);
    printResult(type,obj,'toExponential',res,4);

    res = obj.toFixed(0);
    printResult(type,obj,'toFixed',res,'0');

    res = obj.toPrecision(2);
    printResult(type,obj,'toPrecision',res,2);

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
    var res;
    res = obj.indexOf('World');
    printResult(type,obj,'indexOf',res,'World');

    res = obj.lastIndexOf('World');
    printResult(type,obj,'lastIndexOf',res,'World');

    res = obj.search('Hello');
    printResult(type,obj,'search',res,'Hello');

    res = obj.slice(3,9);
    printResult(type,obj,'slice',res,'3,9');

    res = obj.substring(1,7);
    printResult(type,obj,'substring',res,'1,7');

    res = obj.substr(7,6);
    printResult(type,obj,'substr',res,'7,6');

    res = obj.replace('World','Hizenberg');
    printResult(type,obj,'replace',res,'World,Hizenberg');

    res = obj.toUpperCase();
    printResult(type,obj,'replace',res);

    res = obj.toLowerCase();
    printResult(type,obj,'toLowerCase',res);

    res = obj.concat(obj,'Test Text');
    printResult(type,obj,'concat',res,obj+' Test Text');

    res = obj.charCodeAt(0);
    printResult(type,obj,'charCodeAt',res,'0');

    res = obj.split(",");
    printResult(type,obj,'split',res,',');
}

function forArr(obj,type){
    if(obj != null){
        if(obj.length){
            var res,clone1,clone2,clone3,clone4,clone5,clone6,clone7,clone8,clone9,clone10,clone11,clone12;

            clone12 = obj.slice(0);
            res = clone12.join(' - ');
            printResult(type,obj,'join',res,' - ');

            clone1 = obj.slice(0);
            res = clone1.pop();
            printResult(type,obj,'pop',res);

            clone2 = obj.slice(0);
            res = clone2.push('Kiwi');
            printResult(type,obj,'push',res,'Kiwi');

            clone3 =  obj.slice(0);
            res = clone3.shift();
            printResult(type,obj,'shift',res);

            clone4 =  obj.slice(0);
            res = clone4.unshift("Lemon");
            printResult(type,obj,'unshift',res,"Lemon");

            clone5 = obj.slice(0);
            res = delete clone5[0];
            printResult(type,obj,'delete',res,"clone5[0]");
            
            clone6 = obj.slice(0);
            res = clone6.splice(1, 0, "Lemon", "Kiwi");
            printResult(type,obj,'splice',res,'1, 0, "Lemon", "Kiwi"');

            clone7 = obj.slice(0);
            res = clone7.sort();
            printResult(type,obj,'sort',res);

            clone8 = obj.slice(0);
            res = clone8.reverse();
            printResult(type,obj,'reverse',res);

            clone9 = obj.slice(0);
            res = clone9.concat([40, 100, 1, 5, 25, 10]);
            printResult(type,obj,'concat',res,'[40, 100, 1, 5, 25, 10]');

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
