const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());  // giving the permission to access server from different hosting or domain
app.use(express.json()); // middleware body parser



app.get('/', (req, res) => {
    res.send('this is from my second node server');
})

const users = [
    { id: 1, name: 'rasel', email: 'rasel@gmail.com', phone: '0179809809' },
    { id: 2, name: 'sohel', email: 'sohel@gmail.com', phone: '0179809809' },
    { id: 3, name: 'raju', email: 'raju@gmail.com', phone: '0179809809' },
    { id: 4, name: 'robin', email: 'robin@gmail.com', phone: '0179809809' },
    { id: 5, name: 'rubel', email: 'rubel@gmail.com', phone: '0179809809' },
    { id: 6, name: 'kaiser', email: 'kaiser@gmail.com', phone: '0179809809' },
    { id: 7, name: 'faisal', email: 'faisal@gmail.com', phone: '0179809809' }
]

// app.get('/users', (req, res) => {
//     res.send(users)
// })

app.post('/users', (req, res) => {

    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// search query
app.get('/users', (req, res) => {
    const search = req.query.search
    console.log(search)
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})

// dynamic api (useParams)
app.get('/users/:id', (req, res) => {
    const id = (req.params.id) - 1;;
    const user = users[id]
    // console.log(req.params.id)
    res.send(user)

})



app.listen(port, () => {
    console.log('listening form port', 5000);
})