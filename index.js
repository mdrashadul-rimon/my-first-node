const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look! I can code with node now')
});

const users = [
    {
        id: 1,
        age: 24,
        name: "Beach Owens",
        email: "beachowens@comtract.com",
        phone: "+880 (894) 593-3922"
    },
    {
        id: 2,
        age: 25,
        name: "Walton Fuentes",
        email: "waltonfuentes@comtract.com",
        phone: "+880 (904) 433-3321"
    },
    {
        id: 3,
        age: 35,
        name: "Wilma Mayer",
        email: "wilmamayer@comtract.com",
        phone: "+880 (996) 454-2680"
    },
    {
        id: 4,
        age: 27,
        name: "Lenora Moran",
        email: "lenoramoran@comtract.com",
        phone: "+880 (881) 439-3849"
    }
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})
app.listen(port, () => {
    console.log('listening to port', port);
})