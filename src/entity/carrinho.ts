import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm"
import { Produto } from "./produto"
import { Venda } from "./venda"

@Entity("tb_carrinho")
export class Carrinho {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantidade: number

    @Column()
    preco: number

    @ManyToOne(() => Venda, (venda) => venda.id)
    @JoinColumn({name: 'id_venda'})
    venda: Venda

    @ManyToOne(() => Produto, (produto)=> produto.id)
    @JoinColumn({name: 'id_produto'})
    produto: Produto
}