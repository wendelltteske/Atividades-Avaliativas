import * as express from "express"
import dataSource from "./dataSource"
const app = express()

app.use(express.json())

dataSource
    .initialize()
    .then(() => {
        console.log("Pesquisa de Banco de Dados inicializada!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


const PORT = process.env.PORT
app.listen(PORT, ()=> {console.log(`executando em http://localhost:${PORT}`)})