const express = require("express");
const cors = require("cors");

const app = express();
const contactsRouter = require("./app/routes/contact.route");
const AdminRouter = require("./app/routes/admin.route");
const UserRouter = require("./app/routes/user.route");

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use("/api/admin", AdminRouter);

app.use("/api/user",UserRouter);


app.get("/",(req, res)=>{
    res.json({ message: "Welcome to movie sticket sell application."});
});

module.exports = app;