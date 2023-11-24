const express = require ('express')
const exphbs = require ('express-handlebars')
const mysql = require('mysql2') // drive do banco


const app = express()//utilizando express

//configurando do handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//middlewere para utilizar arquivos estaticos
app.use(express.static('public'))

// rota --> localhost 3333
app.get('/', (req, res)=>{
    return res.render("home")
})

///criar a conect com o banco
const conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
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