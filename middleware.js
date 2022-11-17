var express = require('express')
var app = express()

var cheakUrl = function (req, res, next) {
    console.log("current route is",res.originalUrl)
next()
}
app.use(cheakUrl)

app.get('/', function (req, res) {
    res.send('This is home page')
})
app.get('/login', function (req, res) {
    res.send('This is login page')
})
app.get('/about', function (req, res) {
    res.send('This is about page')
})
app.listen(3000)