const { getUserData, updateUserData } = require('../utils/fileOperations');

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
    const { _id, gender, name, contact, address, picture } = newUser;
    if (_id && gender && name && contact && address && picture) {
        users.push(newUser);
        const updatedUsers = JSON.stringify(users);
        updateUserData(updatedUsers);
        res.send("user successfully added");
    }
    else
        res.send("invalid data");
};

module.exports.patchAUser = (req, res) => {
    const users = getUserData();
    const id = req.params.id;

    let idFlag = 0;
    users.map(user => {
        if (user._id == id)
            idFlag = 1
    })

    if (idFlag) {
        const { gender, name, contact, address, picture } = req.body;
        let updatedUsers = users.map(user =>
            user._id === id
                ? {
                    ...user,
                    ...(gender && { gender }),
                    ...(name && { name }),
                    ...(contact && { contact }),
                    ...(address && { address }),
                    ...(picture && { picture })
                }
                : user
        );
        updatedUsers = JSON.stringify(updatedUsers);
        updateUserData(updatedUsers);
        res.send("user successfully updated");
    }
    else
        res.send("id does not exist");
};

module.exports.bulkUpdate = (req, res) => {
    let users = getUserData();
    const receivedData = req.body;
    receivedData.map(data => {
        const { id, gender, name, contact, address, picture } = data;
        users = users.map(user =>
            user._id === id
                ? {
                    ...user,
                    ...(gender && { gender }),
                    ...(name && { name }),
                    ...(contact && { contact }),
                    ...(address && { address }),
                    ...(picture && { picture })
                }
                : user
        );
    });

    updatedUsers = JSON.stringify(users);
    updateUserData(updatedUsers);
    res.send("users successfully updated");
};

module.exports.deleteAUser = (req, res) => {
    const users = getUserData();
    const id = req.params.id;

    let idFlag = 0;
    users.map(user => {
        if (user._id == id)
            idFlag = 1
    })
    if (idFlag) {
        const filteredUsers = users.filter(User => User._id != id);
        const updatedUsers = JSON.stringify(filteredUsers);
        updateUserData(updatedUsers);
        res.send("successfully deleted the user");
    }
    else
        res.send("id does not exist");
}
