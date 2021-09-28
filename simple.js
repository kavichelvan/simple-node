//import { info } from "log";
const log = require('log');
var _ = require('lodash');

console.log('run success')

log.error("print the log using logger npm package"); 

run()

function run(){
    const vars = [1,5,3,4];
    _.forEach(vars,function(vval) {
        console.log('iteration #:' + vval) 
    });
    console.log('inside run function')

    for (x of vars){
        console.log('second for log ' + x)
    }
}