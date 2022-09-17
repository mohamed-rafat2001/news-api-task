const express = require('express')
const app = express()
const port = process.env.PORT || 3000
let reqq = require('./req')
app.set('view engine', 'hbs')
app.get('/news', (req, res) => {
    reqq((error, data) => {
        if (error) {
            return res.send('found error')
        }
        res.render('index', {
            news: [
                {
                    title: data.title,
                    description: data.description,
                    img: data.img,
                }
            ]
        })
    })

})
app.listen(port, () => {
    console.log(`the server running`)
})