// const express = require('express');
// const app = express();

// // app.enable("case sensitive routing");

// app.get("/home", (req, res) => {
//     res.send("Keluarga terdiri dari 7 orang 1 ayah 4 ibu 2 anak")
// })

// app.listen(3000)


//import dotenv
require("dotenv").config();

const express = require("express");
const app = express();

app.get('/', (req, res) => {
    // Buat kondisi ketika kita jalankan 5000 maka portnya ada di production, jika else berarti di development

    let status = process.env.PORT == 5000? "Production" : "Development";
    res.send(`Hello ! anda masuk sebagai : ${status} App`)
});

app.listen(process.env.PORT, function(){
    console.log(`Anda menggunakan port : ${process.env.PORT}`)
})