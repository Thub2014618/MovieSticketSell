const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findAllFilm)

router.route("/view")
    .get(contacts.findAllScreenings)

router.route("/login")
    .get(contacts.login)

router.route("/register")
    .post(contacts.register)

router.route("/:id")
    .get(contacts.findFilm)

module.exports = router;