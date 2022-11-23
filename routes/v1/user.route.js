const express = require("express");
const userControllers = require('../../controllers/user.controller');

const router = express.Router();


router
    .route("/all")

    /**
     * @api {get}/user/all
     * @apiDescription get all users
     * @apiPermission users
     * 
     * @apiSuccess {object[]} all the of the users
     */
    .get(userControllers.getAllUsers)


    router
    .route("/:id")
    .get(userControllers.getItemDetails);
module.exports = router;