const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/Screenings")
    .get(contacts.findAllScreenings)
    .post(contacts.createScreenings)
    .delete(contacts.deleteAllScreenings)

router.route("/Account")
    .get(contacts.findAllAcc)
    .post(contacts.createAcc)

router.route("/Account/:id")
    .get(contacts.findAcc)
    .delete(contacts.deleteAcc)

router.route("/Screenings/:id")
    .get(contacts.findScreenings)
    .put(contacts.updateScreenings)
    .delete(contacts.deleteScreenings)

router.route("/:id")
    .get(contacts.findFilm)
    .put(contacts.updateFilm)
    .delete(contacts.deleteFilm)

router.route("/")
    .get(contacts.findAllFilm)
    .post(contacts.createFilm)
    .delete(contacts.deleteAllFilm)
    
module.exports = router;