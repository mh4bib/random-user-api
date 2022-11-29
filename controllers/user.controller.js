const {getUserData, updateUserData} = require('../utils/fileOperations');

module.exports.getAllUsers = (req, res) => {
    users = getUserData();
    const limit = req.query.limit;
    res.json(users.slice(0, limit));
};

module.exports.getRandomUsers = (req, res) => {
    const users = getUserData();
    const l = users.length;
    const randomIndex = Math.floor(Math.random() * l)
    res.json(users[randomIndex]);
};

module.exports.postAUsers = (req, res) => {
    const users = getUserData();
    const newUser = req.body;
    users.push(newUser);
    const updatedUsers = JSON.stringify(users);
    updateUserData(updatedUsers);
    res.send("user successfully added");
};

module.exports.patchAUser = (req, res) => {
    const newId = req.params.id;
    const { id, gender, name, contact, address, picture } = req.body;
    const user = users.find(User => User._id == newId);
    if (user) {
        if (id) user._id = id;
        if (gender) user.gender = gender;
        if (name) user.name = name;
        if (contact) user.contact = contact;
        if (address) user.address = address;
        if (picture) user.picture = picture;
        res.send("user successfully updated");
    }
    else
        res.send("id does not matched");
};

module.exports.deleteAUser = (req, res) => {
    const users = getUserData();
    const id = req.params.id;
    const filteredUsers = users.filter(User => User._id != id);
    const updatedUsers = JSON.stringify(filteredUsers);
    updateUserData(updatedUsers);
    res.send("successfully deleted the user");
}
