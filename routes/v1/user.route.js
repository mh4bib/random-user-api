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
    .route("/random")

    /**
     * @api {get}/user/random
     * @apiDescription get a random user
     * @apiPermission users
     * 
     * @apiSuccess {object[]} one random users
     */
    .get(userControllers.getRandomUsers)

router
    .route("/save")

    /**
     * @api {post}/user/save
     * @apiDescription save a new user
     * @apiPermission users
     * 
     * @apiSuccess message in console "new user added"
     */
    .post(userControllers.postAUsers)

router
    .route("/update/:id")

    /**
     * @api {post}/user/save
     * @apiDescription save a new user
     * @apiPermission users
     * 
     * @apiSuccess message in console "new user added"
     */
    .patch(userControllers.patchAUsers)







    // router
    // .route("/:id")
    // .get(userControllers.getItemDetails);
module.exports = router;