const fs = require('fs');

let users;
fs.readFile('fakeData.json', (err, user)=>{
    if (err) {
        users = err;
    }
    else{
        users = JSON.parse(user);
    }
})

module.exports.getAllUsers = (req, res) => {
    res.send(users);
};

module.exports.getItemDetails = (req, res) => {
    res.send("Here is the detail of the selected item");
};