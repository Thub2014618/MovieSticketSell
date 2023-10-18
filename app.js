const express = require("express");
const cors = require("cors");

const app = express();
const contactsRouter = require("./app/routes/contact.route");
const AdminRouter = require("./app/routes/admin.route");
const UserRouter = require("./app/routes/user.route");

const ApiError = require("./app/api-error");

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use("/api/admin", AdminRouter);

app.use("/api/user",UserRouter);




app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    }); 
});

app.get("/",(req, res)=>{
    res.json({ message: "Welcome to movie sticket sell application."});
});

module.exports = app;