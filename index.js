const { query } = require('express')
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/',(req,res) => {
    res.send('hello world!')
})

app.get('/dynamicimage',(req,res) => {
    console.log(req.query.imagename)
    let img = req.query.imagename
    //let image = path.join(__dirname, 'image2.jpg');
    //res.sendFile(imagePath)
    let imagePath = path.join(__dirname, img)
    if (img == imagePath)
    {
    res.sendFile(imagePath)
    }
    else
     res.send('Image not found')
        
})
    

app.listen(port,()=> {
    console.log(`example app listening on port ${port}`)
})
