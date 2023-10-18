const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findAllFilm)

router.route("/booked")
    .get(contacts.showBooked)

router.route("/:id")
    .get(contacts.findFilm)
    .put(contacts.updateFilm)
    .delete(contacts.deleteFilm)
    
module.exports = router;