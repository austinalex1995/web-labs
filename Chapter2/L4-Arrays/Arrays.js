let content = document.getElementById("content");
let input = document.getElementById("input");
let pushButton = document.getElementById("pushButton");
let popButton = document.getElementById("popButton");
let length = document.getElementById("length");
let arr = [];
content.innerText=arr;
length.innerText=0;

pushButton.onclick = updatePush;
popButton.onclick = updatePop;

/**
 * grab the input value, have the arrPush function push the value to arr, and update the site
 * no need to change this function
 */
function updatePush(){
    arrPush(input.value);
    content.innerText=arr;
    length.innerText=arrLength();
}
/**
 * have the arrPush function pop a value from arr, and update the site
 * no need to change this function
 */
function updatePop(){
    arrPop();
    content.innerText=arr;
    length.innerText=arrLength();
}
/**
 * TODO: push a new value to the arr array.
 * @param item a new value
 */
function arrPush(item){
    arr.push(item);
}
/**
 * TODO: pop a value from the arr array.
 */
function arrPop(){
    arr.pop();
}
/**
 * TODO: return the length of arr
 */
function arrLength(){
    return arr.length;
}