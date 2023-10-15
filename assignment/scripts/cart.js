console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
function addItem(item){
    basket.push(item);
    return true;
}
addItem(4);
addItem(8);
addItem(525600);
console.log(basket);

function listItems(array){
    for(let i=0; i<basket.length; i++){
        console.log(basket[i]);
    }
}
console.log(listItems(basket));
console.log(basket);

function empty(array){
    array.pop();
    console.log(array);
    return true;
}

empty(basket);
console.log(basket);



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
