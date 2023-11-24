const { response } = require('express');
const express = require ('express');
const exphbs = require ('express-handlebars');
const PORT = 3333
const app = express();

//configuração para o particals funcionar
const hbs = exphbs.create({
    partialsDir:['views/partials']
});
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');

//Colocando CSS
app.use(express.static('public'))


app.get('/dashboard', (req, res)=>{

//requisicao
//const {nome,idade} = req.body
const items = ['item 1', 'item 2', 'item 3' ]
    return res.render('dashboard', {items})
});

app.get('/post', (req, res)=>{
    const post = {
        title:'Tentando aprender Node',
        category:'javaScript',
        body:'este artigo vai te ajudar a aprender NodeJs',
        Comments:6,
    }
    return response.render('blogpost', {posts})
});

app.get('/blog', (req, res)=>{
const posts = [
    {
        title:'Tentando aprender Node',
        category:'JavaScript',
        body:'este artigo vai te ajudar a aprender NodeJs',
        Comments:6,
    }
]
[
    {
        title:'Tentando aprender Node',
        category:'JavaScript',
        body:'este artigo vai te ajudar a aprender JAVASCRIPT',
        Comments:9,
    }
]

[
    {
        title:'Tentando aprender Node',
        category:'JavaScript',
        body:'este artigo vai te ajudar a aprender NodeJs',
        Comments:5,
    }
]

return res.render('blog', {posts})
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