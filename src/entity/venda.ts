import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { Cliente } from "./cliente"

@Entity("tb_venda")
export class Venda {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data: Date

    @Column()
    status: string

    @ManyToOne(() => Cliente)
    @JoinColumn({name: 'id_cliente'})
    cliente: Cliente
}