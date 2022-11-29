const fs = require('fs');

const getUserData = () => {
    const users = fs.readFileSync('fakeData.json');
    return JSON.parse(users);
}

const updateUserData = (updatedData) => {
    fs.writeFile('fakeData.json', updatedData, (err, user) => {
        if (err) {
            throw err;
        }
        else {
            console.log("user added");
        }
    })
}

module.exports = {getUserData, updateUserData};
