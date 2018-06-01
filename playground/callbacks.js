var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Corentin'
    };

    // Return the user with 3s delay
    setTimeout(() => {
        callback(user);
    }, 3000);
};

// Return the user
getUser(31, (user) => {
    console.log(user);
});

