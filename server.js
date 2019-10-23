const app = require('./src/app')
const port = process.env.port || 3000

app
.listen(port, function() {
    console.log(`app esta rodando na porta ${port} `)
})