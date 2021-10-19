const express = require("express");
const viewRouts = require("./routing/viewRouts")
const apiRouts = require("./routing/apiRouts")
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", viewRouts)
app.use("/api", apiRouts)

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});

