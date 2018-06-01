console.log("Starting app");

// Wait 2 seconds
setTimeout(() => {
    console.log("Waited 2 seconds");
}, 2000);


// Don' wait
setTimeout(() =>{
    console.log("Waited 0 second");
}, 0);

console.log("Finishing up");