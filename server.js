const express = require('express')
app = express()



const d = new Date();

console.log("day: "+d.getDay())
console.log("Hours: "+d.getHours())
console.log("Month: "+d.getMonth() + 1)


const middleware = (req,res,next) => { 
    console.log("Time:", new Date())
    if ((new Date().getDay() > 0 && new Date().getDay() < 6) && (new Date().getHours() >= 9 && (new Date().getHours() + 1) <= 17)) {
        console.log("app is open ")
        next()
    } else {
       
        console.log("app error ")
    }
 }

 app.use(middleware);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/show/home.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/show/contact.html')
})
app.get('/service', (req, res) => {
    res.sendFile(__dirname + '/show/service.html')
})
app.get('/show/style.css', (req, res) => {
    res.sendFile(__dirname + '/show/style.css')
})
// app.use(express.static(__dirname + '/show'))


app.listen(7000, (err) => err? console.log(err) : console.log('OK'))