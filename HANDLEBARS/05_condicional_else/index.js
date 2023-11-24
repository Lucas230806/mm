const express = require ('express');
const exphbs = require ('express-handlebars');
const PORT = 3333
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashborad', (req, res)=>{
    return res.render('dashboard')
})

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
    console.log(`SERVDIRO ON ${PORT}👍`);
});