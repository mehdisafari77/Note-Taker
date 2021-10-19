const express = require("express");
const viewRouts = require("./routing/viewRouts")
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", viewRouts)

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});

