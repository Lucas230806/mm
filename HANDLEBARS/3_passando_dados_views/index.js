const express = require('espress')
const exphbs = require('express-handlebars')
const PORT = 3333

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{
    const user = {
        name: "Marielly",
        surname: "Keila",
        age: 17,
    };

    const palavra = 'teste'

    return res.render("home", {user:user});
})

app.listen(PORT, ()=>{
    console.log(`Servidor on ${PORT}`)
})