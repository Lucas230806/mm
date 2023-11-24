const { response } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2') // drive do banco

const app = express()//utilizando express

//para receber informações do front-end
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//configurando do handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//middlewere para utilizar arquivos estaticos
app.use(express.static('public'))

// rota --> localhost 3333
app.get('/', (req, res) => {
    return res.render("home")
})
//rota localhost:3333/books/insertbook
app.post('/books/insertbook', (req, res) => {
    const { title, nm_paginas } = req.body
    console.log(title, nm_paginas)

    const sql = `INSERT INTO books (title, nm_paginas) VALUES ('${title}', '${nm_paginas}')`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
            return
        }
        response.redirect('/')
    })
});

//royta localhost/books
app.get('/books', (req, res) => {

    const sql = `SELECT *FROM books`

    //query
    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const books = data
        console.log(books)
        return res.render('books', { books })
    })
})

// rota localhost:3333/books/id:
app.get('/books/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT *FROM books WHERE id = ${id}`

    conn.query(sql, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const book = data[0]
        console.log(book)
        return res.render('book', { book })
    })
})

//edição primeira etapa
app.get('/books/edit:id', (req, res)=>{
    const id = req.params.id

    const sql = `SELECT *FROM books WHERE id = ${id}`

    conn.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const book = data[0]
        console.log(book)
        return res.render('editbook', {book})
    })
})

//edicão 2 etapa
app.post('/books/updatebook', (req, res)=>{
    const {id, title, nm_paginas} =  req.body

    //console.log(id, title, nm_paginas)
    const sql = `UPDATE books SET title = `${title}`, nm_paginas = `${nm_paginas}`WHERE id = ${id}`

conn.query(sql,function(err){
    if(err){
        console.log(err)
        return
    }
    return res.redirect('/books')
}) 
})

app.delete('/books/remover.id')


///criar a conect com o banco
const conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'Sen@iDev77!.',
    database: 'banco'
})

//estabelecer a conexão
conn.connect(function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Mysql conectado!')
})

app.listen(3333, () => {
    console.log(`servidor on`)
})