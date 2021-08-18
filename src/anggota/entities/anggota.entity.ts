import { Peminjaman } from "../../peminjaman/entities/peminjaman.entity";
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"

@Entity()
export class Anggota {
    @PrimaryColumn()
    id_anggota:number;
    @Column()
    nama_anggota:string;
    @Column()
    kelas:string;
    @Column()
    no_telp:string;
    @Column()
    alamat:string;
    @OneToMany(()=>Peminjaman,peminjaman=>peminjaman.anggota)
    peminjaman:Peminjaman[]
}