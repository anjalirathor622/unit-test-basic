function sum(x,y){
    return x+y;
    //console.log("x,y");
}
sum(1,2);
function sub(x,y){
    return x-y;
}
function multy(x,y){
    return x*y;
}
function div(x,y){
    return x/y;
}



//named export
module.exports = {sum,sub,multy,div}