var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            } else{
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

/* Add 5 and 7, then add the result to 45 then print the final result */
asyncAdd(5, '7').then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 33);
}).then((res) => {
  console.log('Should be 45 : ', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

/* Do someting async */
/*
var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey. It worked');
        resolve();
        reject('Unable to fulfill promise');
    }, 2500);

});

/!* If promise successes*!/
somePromise.then((message) => {
    console.log('Success:', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});*/
