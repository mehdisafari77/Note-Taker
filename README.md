# Note-Taker
This a note taking app that is connected to a server using express.js in order to extract data from the backend and have it displayed on the client side frontend.

## Getting Started
1. First open Terminal.
2. Navigate to repo file.
3. enter in Terminal "npm install" in order to install all dependecies.
4. Start the server by running either "node server.js" or "npm start".
6. After a message "App listening on http://localhost:3001" you may copy the host url and paste in your browser in order to see app.

## Screenshot Of Website


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/)
* [Node.js](https://nodejs.org/en/docs/)
* [NPM-Library](https://docs.npmjs.com/)
* [Expres.js]()

## Code Snippet Of Delete Note Feature
```javascript
    router.delete("/notes/:id", (req, res) => {
    const notesToKeep = []
    for(let i = 0; i < db.length; i++) {
        if (db[i].id != req.params.id) {
            notesToKeep.push(db[i])
        }
    }

    db = notesToKeep
    fs.writeFileSync("./db/db.json", JSON.stringify(db), (err) => {
        if (err) {
            throw err
        }
    })
    res.json(db)
})
```

## Author

* **Mehdi Safari**
- [Link to Github](https://github.com/mehdisafari77)
- [Link to LinkedIn](https://www.linkedin.com/in/mehdi-safari-992799142/)


