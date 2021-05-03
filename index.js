const express = require ('express')

const usersRoutes = require ("./routes/users.js")

const app = express();


app.use(express.json());

app.use("/people", usersRoutes)
app.get("/", (req, res) => res.send("Welcome to the Users API!"))
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."))

app.listen(3000,console.log('Server running '))