import { Entity, Column,PrimaryGeneratedColumn,ManyToMany, ManyToOne , JoinColumn, OneToMany} from "typeorm";
import { Book} from '../../books/entities/book.entity';

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nama_lokasi:string;
    @Column()
    qty:number
    @OneToMany(() =>Book,book=>book.location)
    @JoinColumn({name:'id',referencedColumnName:'id_lokasi'})
    book:Book[]


}