import { DataSource } from "typeorm"
import { Carrinho } from "./entity/carrinho"
import { Cliente } from "./entity/cliente"
import { Produto } from "./entity/produto"
import { Venda } from "./entity/venda"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "postgres",
    //entities: ["src/entity/*.js"],
    entities: [Cliente, Venda, Produto, Carrinho],
    logging: false,
    synchronize: true,
})

export default dataSource