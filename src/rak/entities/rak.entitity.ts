import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Book } from "../../books/entities/book.entity";
@Entity()
export class Rak {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    nama_rak:string;
    @Column()
    lokasi_rak:string;
    @OneToMany(type => Book,(book:Book) => book.rak)
    book:Book[]


}