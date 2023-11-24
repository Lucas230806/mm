const { response } = require('express');
const express = require ('express');
const exphbs = require ('express-handlebars');
const PORT = 3333
const app = express();
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res)=>{

//requisicao
//const {nome,idade} = req.body
const items = ['item 1', 'item 2', 'item 3' ]
    return res.render('dashboard', {items})
});


app.get('/', (req, res)=>{
    const user = {
        name:'carlos',
        surname: 'wilton',
        age:31,
    }
    const palavra = 'teste'
    const auth = true;
    const approved = true;

    return res.render('home', {user:user, palavra, auth, approved})
});

app.listen(PORT, ()=>{
    console.log(`SERVIDOR ON ${PORT}👍`);
});