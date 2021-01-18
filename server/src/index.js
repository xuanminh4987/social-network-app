const express = require('express')

// GET AND USE
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const loginRoute = require('./routes/login.route')
const usersRoute = require('./routes/users.route')
const postsRoute = require('./routes/posts.route')

//  CREATE SERVER
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('HOME')
})

app.use('/login', loginRoute)
app.use('/users', usersRoute)
app.use('/posts', postsRoute)

app.get('*', (req, res) => {
    res.send('404 NOT FOUND!')
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`);
})