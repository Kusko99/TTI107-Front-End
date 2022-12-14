// console.log('Hello, NodeJS')

const express = require ('express')
const cors = require ('cors')
const app = express()
app.use(express.json())
app.use(cors())

let filmes = [
    {
    titulo: "Forrest Gump - O Contador de Histórias",
    sinopse: "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções."
    },
    {
    titulo: "Um Sonho de Liberdade",
    sinopse: "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela"
    }
    ]
    
//escutar uma requisição get na URL http://localhost:3000/oi
app.get("/oi", (req, res) => {res.send('Salve!')})

//endpoint para obter a lista de filmes
app.get("/filmes", (req, res) => {res.send(filmes)})

app.post("/filmes", (req, res) => {
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    const filme = {titulo: titulo, sinopse: sinopse}
    filmes.push(filme)
    res.json(filmes)
})

app.listen(3000, () => console.log("up and running"))