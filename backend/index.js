import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8080

// database connection to MongoDB
const dbPassword = 'SbwyFhqQqDqCg0TR'
mongoose.Promise = global.Promise
mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://TanujKher:${dbPassword}@cluster0.e8swjge.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB. This is a listener to indicate the same.')
})

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send(`Application is started on port ${port}`)
})

app.listen(port, () => {
    console.log(`Application started on https://localhost:${port}`)
})