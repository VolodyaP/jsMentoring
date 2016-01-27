/*
 * Factory design pattern
 */

function TaskMaker(description){

}

TaskMaker.factory = function(desc){
    return desc;
};


TaskMaker.prototype.assign = function(){};
TaskMaker.prototype.close = function(){};
TaskMaker.prototype.reopen = function(){};

var Task1 = TaskMaker.factory('Create GIT Repo');
console.log(Task1);

var Task2 = TaskMaker.factory('Initial Project');
console.log(Task2);
