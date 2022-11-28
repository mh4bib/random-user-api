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
    const limit = req.query.limit;
    res.json(users.slice(0, limit));
};

module.exports.getRandomUsers = (req, res) => {
    const x = users.length;
    const randomIndex = Math.floor(Math.random() * x)
    res.json(users[randomIndex]);
};

module.exports.postAUsers = (req, res) => {
    const newUser =  req.body;
    users.push(newUser);
    const currentUsers = JSON.stringify(users);
    fs.writeFile('fakeData.json', currentUsers, (err, user)=>{
        if (err) {
            throw err;
        }
        else{
            console.log("user added");
        }
    })
    res.send("user successfully added");
};

module.exports.patchAUsers = (req, res)=>{
    const newId = req.params.id;
    const {id, gender, name, contact, address, picture} = req.body;
    const user = users.find(User => User._id==newId);
    if(user){
    if (id) user._id = id;
    if (gender) user.gender = gender;
    if (name) user.name = name;
    if (contact) user.contact = contact;
    if (address) user.address = address;
    if (picture) user.picture = picture;
    res.send(user);
    }
    else
        res.send("id does not matched");
};
