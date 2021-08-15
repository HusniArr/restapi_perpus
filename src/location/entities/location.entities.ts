import { Entity, Column,PrimaryGeneratedColumn,OneToMany , JoinColumn} from "typeorm";
import { Books} from '../../books/entities/books.entity';

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nama_lokasi:string;
    @Column()
    qty:number;
    @OneToMany( type => Books, books => books.location)
    @JoinColumn({referencedColumnName:"id_lokasi"})
    books:Books[]

}