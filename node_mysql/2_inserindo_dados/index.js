const { response } = require('express')
const express = require ('express')
const exphbs = require ('express-handlebars')
const mysql = require('mysql2') // drive do banco

const app = express()//utilizando express

//para receber informações do front-end
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//configurando do handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//middlewere para utilizar arquivos estaticos
app.use(express.static('public'))

// rota --> localhost 3333
app.get('/', (req, res)=>{
    return res.render("home")
})
//rota localhost:3333/books/insertbook
app.post('/books/insertbook', (req, res)=>{
    const {title, nm_paginas} = req.body
    console.log(title, nm_paginas)

    const sql = `INSERT INTO books (title, nm_paginas) VALUES ('${title}', '${nm_paginas}')`

    conn.query(sql, function(err){
        if(err){
            console.log(err)
            return
        }
        response.redirect('/')
    })
});

///criar a conect com o banco
const conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'seu nome',
    password: 'Sen@iDev77!.',
    database: 'banco'
})

//estabelecer a conexão
conn.connect(function(err){
if(err){
    console.log(err)
    return
}
console.log('Mysql conectado!')
})
 
app.listen(3333, ()=>{
    console.log(`servidor on`)
})