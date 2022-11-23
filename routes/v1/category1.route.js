const express = require("express");
const category1Controllers = require('../../controllers/category1.controller');

const router = express.Router();

router
    .route("/")

    /**
     * @api {get}/category1 all items of category1
     * @apiDescription get all items of category1
     * @apiPermission users
     * 
     * @apiSuccess {object[]} all the items of category1
     */
    .get(category1Controllers.getAllItems)

    /**
     * @api {post}/tools save a tool
     * @apiDescription save a new tool in Database
     * @apiPermission admin
     * 
     */
 //.post(category1Controllers.saveAnItem)

    router
    .route("/:id")
    .get(category1Controllers.getItemDetails);
module.exports = router;