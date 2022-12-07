import express from 'express'

const app = express();
const port = 8080

app.get('/', (req, res) => {
    res.send(`Application is started on port ${port}`)
})

app.listen(port, () => {
    console.log(`Application started on https://localhost:${port}`)
})