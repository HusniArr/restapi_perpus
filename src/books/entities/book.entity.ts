import { Peminjaman } from "../../peminjaman/entities/peminjaman.entity";
import { Entity, Column, PrimaryGeneratedColumn ,ManyToOne, JoinColumn, OneToOne, OneToMany} from "typeorm";
import { Rak } from "../../rak/entities/rak.entitity";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id:number;
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
    @Column()
    stok:number;
    @ManyToOne(() => Rak, rak => rak.book)
    @JoinColumn({name:'id_rak',referencedColumnName:'id'})
    rak:Rak
    @OneToMany(()=>Peminjaman,peminjaman => peminjaman.book)
    peminjaman:Peminjaman[]
}