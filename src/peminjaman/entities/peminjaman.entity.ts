import { Book } from "../../books/entities/book.entity";
import { Entity, Column, JoinColumn, OneToOne, PrimaryColumn, OneToMany } from "typeorm";
import { Anggota } from "../../anggota/entities/anggota.entity";

@Entity()
export class Peminjaman {
    @PrimaryColumn()
    id_pinjam:string;
    @Column()
    id_anggota:number;
    @Column()
    tgl_pinjam:string;
    @Column()
    jml_pinjam:number;
    @Column()
    status:string;
    @OneToMany(()=>Book, book=>book.peminjaman)
    @JoinColumn({name:'id_buku',referencedColumnName:'id'})
    book:Book[]
    @OneToOne(()=>Anggota, anggota=>anggota.peminjaman)
    @JoinColumn({name:'id_anggota'})
    anggota:Anggota
    
}