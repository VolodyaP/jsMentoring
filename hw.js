
    //analog every func
    function myEvery(array,callback){
        var result;
        for(var k in array){
            result = callback(array[k]);
            if(!result){
                return false
            }
        }
        return true;
    }

    //analog some func
    function mySome(array,callback){
        var result;
        for(var k in array){
            result = callback(array[k]);
            if(result){
                return true;
            }
        }
        return false;
    }

    //analog map func
    function myMap(array,callback){
        var result = [];
        for(var k in array){
            result[k] = callback(array[k])
        }
        return result;
    }

    //analog reduce func
    function myReduce(array,callback){
        var previousValue,currentItem,index,result;

        for(var k in array){
            currentItem = array[k];
            index = k;
            (!previousValue)? previousValue = 0 : previousValue;
            result = callback(previousValue,currentItem);
            previousValue = result;
        }
        return result;
    }




