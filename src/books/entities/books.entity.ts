import { Entity, Column, PrimaryGeneratedColumn ,OneToOne, JoinColumn} from "typeorm";
import { Location } from "src/location/entities/location.entities";

@Entity()
export class Books {
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
    @Column({type:"date"})
    tahun_terbit:string;
    @OneToOne(type=>Location,location=>location.books)
    @JoinColumn({name:"id_lokasi",referencedColumnName:"id"})
    location:Location[];
}