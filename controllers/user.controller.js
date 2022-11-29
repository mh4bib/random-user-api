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
    const users = getUserData();
    const id = req.params.id;
    const { gender, name, contact, address, picture } = req.body;

    let updatedUsers = users.map(user =>
        user._id === id
          ? { ...user,
             ...(gender && {gender: gender}),
             ...(name&&{name: name}), 
             ...(contact&&{contact:contact}), 
             ...(address&&{address:address}), 
             ...(picture&&{picture:picture}) 
            }
          : user
      );
    updatedUsers = JSON.stringify(updatedUsers);
    updateUserData(updatedUsers);
    res.send("user successfully updated");
};

module.exports.deleteAUser = (req, res) => {
    const users = getUserData();
    const id = req.params.id;
    const filteredUsers = users.filter(User => User._id != id);
    const updatedUsers = JSON.stringify(filteredUsers);
    updateUserData(updatedUsers);
    res.send("successfully deleted the user");
}
