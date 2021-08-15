import { Entity, Column, PrimaryGeneratedColumn ,ManyToOne, JoinColumn, OneToOne} from "typeorm";
import { Location } from "../../location/entities/location.entities";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    id_lokasi:number;
    @Column()
    kd_buku:string;
    @Column()
    judul_buku:string;
    @Column()
    pengarang:string;
    @Column()
    penerbit:string;
    @Column()
    tahun_terbit:string;
    @ManyToOne(() => Location,location=>location.book)
    @JoinColumn({name:'id_lokasi',referencedColumnName:'id'})
    location:Location[]
   
}