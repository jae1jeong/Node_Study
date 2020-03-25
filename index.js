const express = require('express')
const app = express()
const port = 5000

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://bingotop:iulove3600@@youtubclone-vhisr.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    }).then(() => console.log("MongoDB connected.."))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello Fuckin World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))