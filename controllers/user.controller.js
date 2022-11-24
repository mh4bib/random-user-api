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

module.exports.getRandomUsers = (req, res) => {
    const x = users.length;
    const randomIndex = Math.floor(Math.random() * x)
    res.send(users[randomIndex]);
};